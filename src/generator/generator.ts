import { MappedData, MappedDataRow } from 'mdx-m3-viewer/dist/cjs/utils/mappeddata';
import { camelCase, pascalCase, war3ToDefaultTS, war3ToTS, war3TypeToTS } from '../utils';

interface Prop {
  id: string;
  row: MappedDataRow;
  field: string;
  type: string;
  tsType: string;
  name: string;
  profile: boolean;
  specific: string | undefined;
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
    const profile = <string>row.string('slk') === 'Profile';
    const specific = row.string('usespecific') || row.string('notspecific'); // Used for abilities

    props.push({ id, row, field, type, tsType, name, profile, specific });
  }

  return props;
}

function generateTSInterface(name: string, props: Prop[]): string {
  return `export interface ${name} {\n  oldId: string;\n  newId: string;\n${props.map((prop) => `  ${prop.name}: ${prop.tsType};`).join('\n')}\n}`;
}

function generateTSEnum(name: string, objects: OEObjects): string {
  const names: {[key: string]: string} = {};

  for (const [id, object] of Object.entries(objects)) {
    const name = <string | undefined>(object['name'] || object['nameEditorOnly'] || object['tooltip']);
    let nameWithSuffix = name;
    
    let editorSuffix = <string | undefined>(object['nameEditorSuffix'] || object['editorSuffix']);
    if (editorSuffix) {
      nameWithSuffix += editorSuffix;
    }

    if (nameWithSuffix) {
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
      console.warn('Object has no name: ', id, object);
    }
  }

  return `export enum ${name} {\n${Object.entries(names).map(([name, id]) => `  ${name} = '${id}',`).sort().join('\n')}\n}`;
}

function handleWrongCapitalization(id: string) {
  if (id === 'Ytsc') {
    return 'YTsc';
  }

  return id;
}


function generateObjects(props: Prop[], data: MappedData, profile: MappedData, weStrings: MappedDataRow): OEObjects {
  const objects: OEObjects = {};

  for (let [id, row] of Object.entries(data.map)) {
    const object: OEObject = {};

    id = handleWrongCapitalization(id);

    for (const prop of props) {
      if (!prop.specific || prop.specific.includes(id)) {
        let value: string | undefined;

        if (prop.profile) {
          const profileRow = profile.getRow(id);

          if (profileRow) {
            value = profileRow.string(prop.field.toLowerCase());
          }
        } else {
          value = row.string(prop.field);
        }

        // Lots of values are missing, especially for buffs.
        if (value === undefined) {
          object[prop.name] = war3ToDefaultTS(prop.type);
        } else {
          if (value.startsWith('WESTRING')) {
            value = weStrings.string(value);
          }
    
          try {
            object[prop.name] = war3ToTS(prop.type, value);
          } catch (e) {
            console.log('FAILED TO CONVERT WAR3 TO TS', id, prop.id, prop.name, value, typeof value)
          }
        }
      }
    }

    // Some objects seem to have no real data.
    if (object['name'] || object['editorSuffix'] || object['nameEditorOnly'] || object['tooltip']) {
      // Not needed, but makes stuff more consistent with the map data.
      object['oldId'] = id;
      object['newId'] = '\0\0\0\0';

      objects[id] = object;
    } else {
      console.log('Found no name for object', id);
    }
  }

  return objects;
}

function generateTSContainer(interfaceName: string, enumName: string, props: Prop[]) {
  const lowerInterfaceName = interfaceName.toLowerCase();

  return `export function ${lowerInterfaceName}Loader(object: ${interfaceName}, modification: Modification) {
  const { id, value } = modification;
  switch(id) {
${props.map((prop) => `    case '${prop.id}': object.${prop.name} = war3ToTS('${prop.type}', value); return;`).join('\n')}
    default: throw Error(\`Unknown modification: \${id}\`);
  }
}

export function ${lowerInterfaceName}Saver(gameObject: ${interfaceName}, object: ${interfaceName}): Modification[] {
  const modifications: Modification[] = [];
${props.map((prop) => `  if (object.${prop.name} !== gameObject.${prop.name}) { modifications.push(tsToWar3('${prop.id}', '${prop.type}', object.${prop.name})); }`).join('\n')}
  return modifications;
}

export class ${interfaceName}Container {
  /**
   * Game ${lowerInterfaceName}s.
   */
  game = <Readonly<{[key in ${enumName}]: Readonly<${interfaceName}>}>>OBJECTS;
  
  /**
   * Map ${lowerInterfaceName}s.
   */
  map: {[key: string]: ${interfaceName} } = {};

  /**
   * Get an existing ${lowerInterfaceName}.
   * 
   * If the ${lowerInterfaceName} isn't in the map data but is in the game data, it will be copied to the map data.
   */
  get(id: string): ${interfaceName} | undefined {
    return get(this, id);
  }

  /**
   * Copy an existing ${lowerInterfaceName}.
   * 
   * The source ${lowerInterfaceName} can either be given as a string ID, or an ${lowerInterfaceName} returned from previous get/copy calls.
   * 
   * If newId is supplied, it will be used as the new ${lowerInterfaceName}'s ID, otherwise a random ID is generated.
   * 
   * If a random ID is generated, its first letter will be capitalized if the base ID's first letter is capitalized, to support hero units.
   */
  copy(baseIdOrObject: string | ${interfaceName}, newId?: string): ${interfaceName} | undefined {
    return copy(this, baseIdOrObject, newId);
  }

  /**
   * Checks if the map contains an ${lowerInterfaceName} with the given ID.
   * 
   * Does not the game data.
   */
  has(id: string): boolean {
    return !!this.map[id];
  }
}`;
}

interface GeneratedObjects {
  tsContent: string;
  jsonContent: string;
}

function enumForType(type: string): string {
  if (type === 'Ability') {
    return 'Abilities';
  } else {
    return `${type}s`;
  }
}

function generateOutput(type: string, props: Prop[], objects: OEObjects): GeneratedObjects {
  const fileName = `${type.toLowerCase()}s`;
  const interfaceName = type;
  const enumName = enumForType(type);
  const tsContent = [
    [
      `import { readFileSync } from 'fs';`,
      `import Modification from 'mdx-m3-viewer/dist/cjs/parsers/w3x/w3u/modification';`,
      `import { get, copy } from '../container';`,
      `import { war3ToTS, tsToWar3 } from '../utils';`,
    ].join('\n'),
    `const OBJECTS = Object.freeze(JSON.parse(readFileSync(\`\${__dirname}/${fileName}data.json\`, 'utf8')));
for (const object of Object.values(OBJECTS)) {
  Object.freeze(object);
}`,
    generateTSInterface(interfaceName, props),
    generateTSEnum(enumName, objects),
    generateTSContainer(interfaceName, enumName, props),
  ].join('\n\n');
  const jsonContent = JSON.stringify(objects, undefined, 2);

  return { tsContent, jsonContent };
}

export interface GeneratorInput {
  weStrings: MappedDataRow;
  profile: MappedData;
  unitAndItemMeta: MappedData;
  unitData: MappedData;
  itemData: MappedData;
  destructableMeta: MappedData;
  destructableData: MappedData;
  doodadMeta: MappedData;
  doodadData: MappedData;
  abilityMeta: MappedData;
  abilityData: MappedData;
  buffMeta: MappedData;
  buffData: MappedData;
  upgradeMeta: MappedData;
  upgradeData: MappedData;
}

export interface GeneratorResult {
  units?: GeneratedObjects;
  items?: GeneratedObjects;
  destructables?: GeneratedObjects;
  doodads?: GeneratedObjects;
  abilities?: GeneratedObjects;
  buffs?: GeneratedObjects;
  upgrades?: GeneratedObjects;
}

export async function objectDataGenerator({
  weStrings,
  profile,
  unitAndItemMeta,
  unitData,
  itemData,
  destructableMeta,
  destructableData,
  doodadMeta,
  doodadData,
  abilityMeta,
  abilityData,
  buffMeta,
  buffData,
  upgradeMeta,
  upgradeData,
}: GeneratorInput): Promise<GeneratorResult> {
  generateProps(upgradeMeta, weStrings);
  const unitAndItemProps = generateProps(unitAndItemMeta, weStrings);
  const unitProps = unitAndItemProps.filter((prop) => <string>prop.row.string('useunit') === '1');
  const itemProps = unitAndItemProps.filter((prop) => <string>prop.row.string('useitem') === '1');
  const destructableProps = generateProps(destructableMeta, weStrings);
  const doodadProps = generateProps(doodadMeta, weStrings);
  // const abilityProps = generateProps(abilityMeta, weStrings);
  // const buffProps = generateProps(buffMeta, weStrings);
  // const upgradeProps = generateProps(upgradeMeta, weStrings);
  const units = generateObjects(unitProps, unitData, profile, weStrings);
  const items = generateObjects(itemProps, itemData, profile, weStrings);
  const destructables = generateObjects(destructableProps, destructableData, profile, weStrings);
  const doodads = generateObjects(doodadProps, doodadData, profile, weStrings);
  // const abilities = generateObjects(abilityProps, abilityData, profile, weStrings);
  // const buffs = generateObjects(buffProps, buffData, profile, weStrings);
  // const upgrades = generateObjects(upgradeProps, upgradeData, profile, weStrings);

  return {
    units: generateOutput('Unit', unitProps, units),
    items: generateOutput('Item', itemProps, items),
    destructables: generateOutput('Destructable', destructableProps, destructables),
    doodads: generateOutput('Doodad', doodadProps, doodads),
    // abilities: generateOutput('Ability', abilityProps, abilities),
    // buffs: generateOutput('Buff', buffProps, buffs),
    // upgrades: generateOutput('Upgrade', upgradeProps, upgrades),
  };
}
