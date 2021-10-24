import { MappedData, MappedDataRow } from 'mdx-m3-viewer/dist/cjs/utils/mappeddata';
import { camelCase, pascalCase, war3ToTS, war3TypeToTS } from '../utils';

interface Prop {
  id: string;
  row: MappedDataRow;
  field: string;
  type: string;
  tsType: string;
  name: string;
}

type OEObject = Record<string, string | number | boolean>;
type OEObjects = Record<string, OEObject>;

function generateProps(metaData: MappedData, weStrings: MappedDataRow): Prop[] {
  const props: Prop[] = [];

  for (const [id, row] of Object.entries(metaData.map)) {
    const field = <string>row.string('field');
    const type = <string>row.string('type');
    const tsType = war3TypeToTS(type);
    const weName = <string>row.string('displayname');
    const name = camelCase(<string>weStrings.string(weName.toLowerCase()));

    props.push({ id, row, field, type, tsType, name });
  }

  return props;
}

function generateTSInterface(name: string, props: Prop[]): string {
  return `export interface ${name} {\n${props.map((prop) => `  ${prop.name}: ${prop.tsType};`).join('\n')}\n}`;
}

function generateTSEnum(name: string, objects: OEObjects): string {
  const names: {[key: string]: string} = {};

  for (const [id, object] of Object.entries(objects)) {
    const name = <string | undefined>object['name'];

    if (name) {
      let nameWithSuffix = name;

      const editorSuffix = <string | undefined>object['nameEditorSuffix'];
      if (editorSuffix) {
        nameWithSuffix += editorSuffix;
      }

      let enumName = pascalCase(nameWithSuffix);
        
      if (names[enumName] !== undefined) {
        for (let suffix = 2; suffix < 10; suffix++) {
          if (names[enumName + suffix] === undefined) {
            enumName = enumName + suffix;
            break;
          }
        }
      }

      names[enumName] = id;
    } else {
      console.warn('Object has no name: ', id);
    }
  }

  return `export enum ${name} {\n${Object.entries(names).map(([name, id]) => `  ${name} = '${id}',`).sort().join('\n')}\n}`;
}

function generateObjects(props: Prop[], data: MappedData, weStrings: MappedDataRow): OEObjects {
  const objects: OEObjects = {};

  for (const [id, row] of Object.entries(data.map)) {
    const object: OEObject = {};

    for (const prop of props) {
      const field = prop.field;
      let value = row.string(field);

      if (value && value.startsWith('WESTRING')) {
        value = weStrings.string(value);
      }

      try {
      object[prop.name] = war3ToTS(prop.type, value);
      } catch (e) {
        console.log('FAILED TO CONVERT WAR3 TO TS', id, prop.id, prop.name, value, typeof value)
      }
    }

    // Some objects seem to have no real data.
    if (object['name']) {
      objects[id] = object;
    }
  }

  return objects;
}

function generateTSContainer(interfaceName: string, enumName: string, mapName: string, props: Prop[]) {
  return `type ${mapName} = { oldId: string, newId: string } & ${interfaceName};

export class ${interfaceName}Container extends OEContainer<${interfaceName}> {
  override game = <{[key in ${enumName}]: ${interfaceName}}>objects;
  override map: {[key: string]: ${mapName} } = {};
  override loadModification(object: ${mapName}, modification: Modification) {
    const { id, value } = modification;
    switch(id) {
${props.map((prop) => `      case '${prop.id}': object.${prop.name} = war3ToTS('${prop.type}', value); return;`).join('\n')}
      default: throw Error(\`Unknown modification: \${id}\`);
    }
  }
  override saveModifications(gameObject: ${interfaceName}, object: ${mapName}): Modification[] {
    const modifications: Modification[] = [];
${props.map((prop) => `    if (object.${prop.name} !== gameObject.${prop.name}) { modifications.push(tsToWar3('${prop.id}', '${prop.type}', object.${prop.name})); }`).join('\n')}
    return modifications;
  }
}`;
}

interface GeneratedObjects {
  tsContent: string;
  jsonContent: string;
}

function generateOutput(type: string, props: Prop[], objects: OEObjects): GeneratedObjects {
  const fileName = `${type.toLowerCase()}s`;
  const interfaceName = type;
  const enumName = `${type}s`;
  const mapName = `Map${type}`;
  const tsContent = [
    [
      `import Modification from 'mdx-m3-viewer/dist/cjs/parsers/w3x/w3u/modification';`,
      `import { OEContainer } from '../container';`,
      `import { war3ToTS, tsToWar3 } from '../utils';`,
      `import * as objects from './${fileName}data.json';`,
    ].join('\n'),
    generateTSInterface(interfaceName, props),
    generateTSEnum(enumName, objects),
    generateTSContainer(interfaceName, enumName, mapName, props),
  ].join('\n\n');
  const jsonContent = JSON.stringify(objects, undefined, 2);

  return { tsContent, jsonContent };
}

export interface GeneratorInput {
  weStrings: MappedData;
  unitAndItemMeta: MappedData;
  unitData: MappedData;
  itemData: MappedData;
  destructableMeta: MappedData;
  destructableData: MappedData;
  doodadMeta: MappedData;
  doodadData: MappedData;
}

export interface GeneratorResult {
  units: GeneratedObjects;
  items: GeneratedObjects;
  destructables: GeneratedObjects;
  doodads: GeneratedObjects;
}

export async function objectDataGenerator({ weStrings, unitAndItemMeta, unitData, itemData, destructableMeta, destructableData, doodadMeta, doodadData }: GeneratorInput): Promise<GeneratorResult> {
  const weStringsRow = <MappedDataRow>weStrings.getRow('WorldEditStrings');
  const unitAndItemProps = generateProps(unitAndItemMeta, weStringsRow);
  const unitProps = unitAndItemProps.filter((prop) => <string>prop.row.string('useunit') === '1');
  const itemProps = unitAndItemProps.filter((prop) => <string>prop.row.string('useitem') === '1');
  const destructableProps = generateProps(destructableMeta, weStringsRow);
  const doodadProps = generateProps(doodadMeta, weStringsRow);
  const units = generateObjects(unitProps, unitData, weStringsRow);
  const items = generateObjects(itemProps, itemData, weStringsRow);
  const destructables = generateObjects(destructableProps, destructableData, weStringsRow);
  const doodads = generateObjects(doodadProps, doodadData, weStringsRow);
  
  return {
    units: generateOutput('Unit', unitProps, units),
    items: generateOutput('Item', itemProps, items),
    destructables: generateOutput('Destructable', destructableProps, destructables),
    doodads: generateOutput('Doodad', doodadProps, doodads),
  };
}
