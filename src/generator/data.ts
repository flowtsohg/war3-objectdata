import { MappedData } from "mdx-m3-viewer/dist/cjs/utils/mappeddata";
import { GeneratorInput } from "./generator";
import { readFileSync } from "fs";

function readFile(path: string) {
  let text = readFileSync(`objectdata/${path}`, 'utf8');

  // BOM.
  if (text.charCodeAt(0) === 0xFEFF) {
		text = text.slice(1);
	}

  return text;
}

export async function loadData(): Promise<GeneratorInput> {
  const weStrings = new MappedData();
  weStrings.load(readFile('_locales/enus.w3mod/ui/worldeditstrings.txt'));
  weStrings.load(readFile('_locales/enus.w3mod/ui/worldeditgamestrings.txt'));

  const unitAndItemMeta = new MappedData();
  unitAndItemMeta.load(readFile('units/unitmetadata.slk'));

  const unitData = new MappedData();
  unitData.load(readFile('units/unitdata.slk'));
  unitData.load(readFile('units/unitbalance.slk'));
  unitData.load(readFile('units/unitabilities.slk'));
  unitData.load(readFile('units/unitskin.txt'));
  unitData.load(readFile('units/unitui.slk'));
  unitData.load(readFile('units/unitweapons.slk'));
  unitData.load(readFile('units/unitweaponsfunc.txt'));
  unitData.load(readFile('units/unitweaponsskin.txt'));
  unitData.load(readFile('units/humanunitfunc.txt'));
  unitData.load(readFile('units/orcunitfunc.txt'));
  unitData.load(readFile('units/undeadunitfunc.txt'));
  unitData.load(readFile('units/nightelfunitfunc.txt'));
  unitData.load(readFile('units/neutralunitfunc.txt'));
  unitData.load(readFile('_locales/enus.w3mod/units/unitskinstrings.txt'));
  unitData.load(readFile('_locales/enus.w3mod/units/humanunitstrings.txt'));
  unitData.load(readFile('_locales/enus.w3mod/units/orcunitstrings.txt'));
  unitData.load(readFile('_locales/enus.w3mod/units/undeadunitstrings.txt'));
  unitData.load(readFile('_locales/enus.w3mod/units/nightelfunitstrings.txt'));
  unitData.load(readFile('_locales/enus.w3mod/units/neutralunitstrings.txt'));
  
  const itemData = new MappedData();
  itemData.load(readFile('units/itemdata.slk'));
  itemData.load(readFile('units/itemfunc.txt'));
  itemData.load(readFile('units/itemskin.txt'));
  itemData.load(readFile('units/itemabilityfunc.txt'));
  itemData.load(readFile('_locales/enus.w3mod/units/itemstrings.txt'));
  itemData.load(readFile('_locales/enus.w3mod/units/itemskinstrings.txt'));
  itemData.load(readFile('_locales/enus.w3mod/units/itemabilitystrings.txt'));

  const destructableMeta = new MappedData();
  destructableMeta.load(readFile('units/destructablemetadata.slk'));

  const destructableData = new MappedData();
  destructableData.load(readFile('units/destructabledata.slk'));
  destructableData.load(readFile('units/destructableskin.txt'));
  destructableData.load(readFile('_locales/enus.w3mod/units/destructableskinstrings.txt'));

  const doodadMeta = new MappedData();
  doodadMeta.load(readFile('doodads/doodadmetadata.slk'));

  const doodadData = new MappedData();
  doodadData.load(readFile('doodads/doodads.slk'));
  doodadData.load(readFile('doodads/doodadskins.txt'));
  doodadData.load(readFile('_locales/enus.w3mod/doodads/doodadskinstrings.txt'));

  return { weStrings, unitAndItemMeta, unitData, itemData, destructableMeta, destructableData, doodadMeta, doodadData };
}