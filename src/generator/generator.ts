import {
  MappedData,
  MappedDataRow,
} from "mdx-m3-viewer-th/dist/cjs/utils/mappeddata";
import {
  camelCase,
  pascalCase,
  war3ToDefaultTS,
  war3ToTS,
  war3TypeToTS,
} from "../utils";

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
    const field = <string>row.string("field");
    const type = <string>row.string("type");
    const tsType = war3TypeToTS(type);
    const displayName = <string>row.string("displayname");
    const profile = <string>row.string("slk") === "Profile"; // Used for strings.
    const specific = row.string("usespecific") || row.string("notspecific"); // Used for abilities.
    let name = camelCase(<string>weStrings.string(displayName.toLowerCase()));

    // Wind Walk has the same named Backstab Damage fields - one set for the number values, one set for whether they are enabled.
    if (id === "Owk4") {
      name += "Enabled";
    }

    // Upgrade fields share the same name.
    const conflict = props.find((prop) => prop.name === name);
    if (conflict) {
      name += <string>row.string("effecttype");
    }

    props.push({ id, row, field, type, tsType, name, profile, specific });
  }

  return props;
}

function generateTSInterface(name: string, props: Prop[]): string {
  const tsInterface = `export interface ${name} extends IDs {\n${props
    .map((prop) => `  ${prop.name}: ${prop.tsType};`)
    .join("\n")}\n}`;
  const outBaseProps = props
    .map(
      (prop) =>
        `{ id: <const>'${prop.id}', name: <const>'${prop.name}', type: <const>'${prop.type}' }`
    )
    .join(", ");

  return `${tsInterface}\n\nexport const ${name}Props = [ ${outBaseProps} ];`;
}

function generateTSAbilityInterfaces(
  name: string,
  objects: OEObjects,
  props: Prop[]
) {
  const baseProps = props.filter((prop) => !prop.specific);
  const baseInterface = baseProps
    .map((prop) => `  ${prop.name}: ${prop.tsType};`)
    .join("\n");
  const interfaces = [];
  const outBaseProps = baseProps
    .map(
      (prop) =>
        `{ id: <const>'${prop.id}', name: <const>'${prop.name}', type: <const>'${prop.type}' }`
    )
    .join(", ");
  const outProps: Record<string, string> = {};

  for (const object of Object.values(objects)) {
    const id = <string>object["oldId"];
    const abilityProps = props.filter(
      (prop) => prop.specific && prop.specific.includes(id)
    );
    let objectName = getOEObjectName(object);

    if (abilityProps.length) {
      interfaces.push(
        `  export interface ${objectName} extends ${name} {\n${abilityProps
          .map((prop) => `    ${prop.name}: ${prop.tsType};`)
          .join("\n")}\n  }`
      );

      outProps[id] = abilityProps
        .map(
          (prop) =>
            `{ id: <const>'${prop.id}', name: <const>'${prop.name}', type: <const>'${prop.type}' }`
        )
        .join(", ");
    } else {
      interfaces.push(`  export interface ${objectName} extends ${name} {}`);
    }
  }

  return `interface ${name} extends IDs {\n${baseInterface}\n};\n\nexport namespace ${name}Types {\n${interfaces.join(
    "\n\n"
  )}\n};\n\nexport const ${name}Props = [ ${outBaseProps} ];\nexport const ${name}SpecificProps = {\n${Object.entries(
    outProps
  )
    .map(([id, props]) => `  ${id}: [${props}],`)
    .join("\n")}\n};`;
}

function getOEObjectName(object: OEObject) {
  let name = <string | undefined>(
    (object["name"] || object["nameEditorOnly"] || object["tooltip"])
  );

  let editorSuffix = <string | undefined>(
    (object["nameEditorSuffix"] || object["editorSuffix"])
  );
  if (editorSuffix) {
    name += editorSuffix;
  }

  if (name) {
    name = pascalCase(name);
  }

  return name;
}

function generateTSEnum(name: string, objects: OEObjects, constant: boolean): string {
  const names: { [key: string]: string } = {};

  for (const [id, object] of Object.entries(objects)) {
    let enumName = getOEObjectName(object);

    if (enumName) {
      if (names[enumName] !== undefined) {
        for (let suffix = 1; suffix < 20; suffix++) {
          if (names[enumName + suffix] === undefined) {
            enumName = enumName + suffix;
            break;
          }
        }
      }

      names[enumName] = id;
    } else {
      console.warn("Object has no name: ", id, object);
    }
  }

  return `export ${constant ? "const" : ""} enum ${name} {\n${Object.entries(names)
    .map(([name, id]) => `  ${name} = '${id}',`)
    .sort()
    .join("\n")}\n}`;
}

function handleWrongCapitalization(id: string) {
  if (id === "Ytsc") {
    return "YTsc";
  }

  return id;
}

function generateObjects(
  props: Prop[],
  data: MappedData,
  profile: MappedData,
  weStrings: MappedDataRow
): OEObjects {
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
          if (value.startsWith("WESTRING")) {
            value = weStrings.string(value);
          }

          try {
            object[prop.name] = war3ToTS(prop.type, value);
          } catch (e) {
            console.log(
              "FAILED TO CONVERT WAR3 TO TS",
              id,
              prop.id,
              prop.name,
              value,
              typeof value
            );
          }
        }
      }
    }

    // Some objects seem to have no real data.
    if (
      object["name"] ||
      object["editorSuffix"] ||
      object["nameEditorOnly"] ||
      object["tooltip"]
    ) {
      // Not needed, but makes stuff more consistent with the map data.
      object["oldId"] = id;
      object["newId"] = "\0\0\0\0";

      objects[id] = object;
    } else {
      console.log("Found no name for object", id);
    }
  }

  return objects;
}

function generateTSContainer(interfaceName: string, enumName: string) {
  const lowerInterfaceName = interfaceName.toLowerCase();

  return `export class ${interfaceName}Container extends Container<${interfaceName}> {
  override game: Readonly<{[key in ${enumName}]: Readonly<${interfaceName}>}> = OBJECTS;
}`;
}

interface GeneratedObjects {
  tsContent: string;
  jsonContent: string;
  constants: string;
}

function enumForType(type: string): string {
  if (type === "Ability") {
    return "Abilities";
  } else {
    return `${type}s`;
  }
}

function generateOutput(
  type: string,
  props: Prop[],
  objects: OEObjects,
  abilities: boolean
): GeneratedObjects {
  const interfaceName = type;
  const enumName = enumForType(type);
  const fileName = enumName.toLowerCase();
  let interfaces: string;

  if (abilities) {
    interfaces = generateTSAbilityInterfaces(interfaceName, objects, props);
  } else {
    interfaces = generateTSInterface(interfaceName, props);
  }
  const tsContent = [
    [
      `import { readFileSync } from 'fs';`,
      `import { IDs, Container } from '../container';`,
    ].join("\n"),
    `const OBJECTS = Object.freeze(JSON.parse(readFileSync(\`\${__dirname}/${fileName}data.json\`, 'utf8')));
for (const object of Object.values(OBJECTS)) {
  Object.freeze(object);
}`,
    interfaces,
    generateTSEnum(enumName, objects, false),
    generateTSContainer(interfaceName, enumName),
  ].join("\n\n");
  const jsonContent = JSON.stringify(objects, undefined, 2);
  const constants = generateTSEnum(enumName, objects, true);

  return { tsContent, jsonContent, constants };
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
  units: GeneratedObjects;
  items: GeneratedObjects;
  destructables: GeneratedObjects;
  doodads: GeneratedObjects;
  abilities: GeneratedObjects;
  buffs: GeneratedObjects;
  upgrades: GeneratedObjects;
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
  const unitAndItemProps = generateProps(unitAndItemMeta, weStrings);

  const unitProps = unitAndItemProps.filter(
    (prop) =>
      <string>prop.row.string("useunit") === "1" ||
      <string>prop.row.string("usehero") === "1" || 
      <string>prop.row.string("usebuilding") === "1"
  );
  const itemProps = unitAndItemProps.filter(
    (prop) => <string>prop.row.string("useitem") === "1"
  );
  const destructableProps = generateProps(destructableMeta, weStrings);
  const doodadProps = generateProps(doodadMeta, weStrings);
  const abilityProps = generateProps(abilityMeta, weStrings);
  const buffProps = generateProps(buffMeta, weStrings);
  const upgradeProps = generateProps(upgradeMeta, weStrings);
  const units = generateObjects(unitProps, unitData, profile, weStrings);
  const items = generateObjects(itemProps, itemData, profile, weStrings);
  const destructables = generateObjects(
    destructableProps,
    destructableData,
    profile,
    weStrings
  );
  const doodads = generateObjects(doodadProps, doodadData, profile, weStrings);
  const abilities = generateObjects(
    abilityProps,
    abilityData,
    profile,
    weStrings
  );
  const buffs = generateObjects(buffProps, buffData, profile, weStrings);
  const upgrades = generateObjects(
    upgradeProps,
    upgradeData,
    profile,
    weStrings
  );

  return {
    units: generateOutput("Unit", unitProps, units, false),
    items: generateOutput("Item", itemProps, items, false),
    destructables: generateOutput(
      "Destructable",
      destructableProps,
      destructables,
      false
    ),
    doodads: generateOutput("Doodad", doodadProps, doodads, false),
    abilities: generateOutput("Ability", abilityProps, abilities, true),
    buffs: generateOutput("Buff", buffProps, buffs, false),
    upgrades: generateOutput("Upgrade", upgradeProps, upgrades, false),
  };
}
