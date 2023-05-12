import {
  MappedData,
  MappedDataRow,
} from "mdx-m3-viewer-th/dist/cjs/utils/mappeddata";
import { GeneratorInput } from "./generator";
import { readFileSync } from "fs";

function readFile(path: string) {
  let text = readFileSync(`objectdata/${path}`, "utf8");

  // BOM.
  if (text.charCodeAt(0) === 0xfeff) {
    text = text.slice(1);
  }

  return text;
}

export async function loadData(locale: "enus"): Promise<GeneratorInput> {
  const weStringTable = new MappedData();
  weStringTable.load(
    readFile(`_locales/${locale}.w3mod/ui/worldeditstrings.txt`)
  );
  weStringTable.load(
    readFile(`_locales/${locale}.w3mod/ui/worldeditgamestrings.txt`)
  );
  const weStrings = <MappedDataRow>weStringTable.getRow("WorldEditStrings");

  const profile = new MappedData();
  profile.load(readFile(`_locales/${locale}.w3mod/ui/worldeditstrings.txt`));
  profile.load(
    readFile(`_locales/${locale}.w3mod/ui/worldeditgamestrings.txt`)
  );
  profile.load(readFile("units/unitskin.txt"));
  profile.load(readFile("units/unitweaponsfunc.txt"));
  profile.load(readFile("units/unitweaponsskin.txt"));
  profile.load(readFile("units/humanunitfunc.txt"));
  profile.load(readFile("units/orcunitfunc.txt"));
  profile.load(readFile("units/undeadunitfunc.txt"));
  profile.load(readFile("units/nightelfunitfunc.txt"));
  profile.load(readFile("units/neutralunitfunc.txt"));
  profile.load(readFile(`_locales/${locale}.w3mod/units/unitskinstrings.txt`));
  profile.load(readFile(`_locales/${locale}.w3mod/units/humanunitstrings.txt`));
  profile.load(readFile(`_locales/${locale}.w3mod/units/orcunitstrings.txt`));
  profile.load(
    readFile(`_locales/${locale}.w3mod/units/undeadunitstrings.txt`)
  );
  profile.load(
    readFile(`_locales/${locale}.w3mod/units/nightelfunitstrings.txt`)
  );
  profile.load(
    readFile(`_locales/${locale}.w3mod/units/neutralunitstrings.txt`)
  );
  profile.load(
    readFile(`_locales/${locale}.w3mod/units/campaignunitstrings.txt`)
  );
  profile.load(readFile("units/itemfunc.txt"));
  profile.load(readFile("units/itemskin.txt"));
  profile.load(readFile("units/itemabilityfunc.txt"));
  profile.load(readFile(`_locales/${locale}.w3mod/units/itemstrings.txt`));
  profile.load(readFile(`_locales/${locale}.w3mod/units/itemskinstrings.txt`));
  profile.load(
    readFile(`_locales/${locale}.w3mod/units/itemabilitystrings.txt`)
  );
  profile.load(readFile("units/destructableskin.txt"));
  profile.load(
    readFile(`_locales/${locale}.w3mod/units/destructableskinstrings.txt`)
  );
  profile.load(readFile("doodads/doodadskins.txt"));
  profile.load(
    readFile(`_locales/${locale}.w3mod/doodads/doodadskinstrings.txt`)
  );
  profile.load(readFile("units/abilityskin.txt"));
  profile.load(readFile("units/humanabilityfunc.txt"));
  profile.load(readFile("units/orcabilityfunc.txt"));
  profile.load(readFile("units/undeadabilityfunc.txt"));
  profile.load(readFile("units/nightelfabilityfunc.txt"));
  profile.load(readFile("units/neutralabilityfunc.txt"));
  profile.load(
    readFile(`_locales/${locale}.w3mod/units/abilityskinstrings.txt`)
  );
  profile.load(
    readFile(`_locales/${locale}.w3mod/units/humanabilitystrings.txt`)
  );
  profile.load(
    readFile(`_locales/${locale}.w3mod/units/orcabilitystrings.txt`)
  );
  profile.load(
    readFile(`_locales/${locale}.w3mod/units/undeadabilitystrings.txt`)
  );
  profile.load(
    readFile(`_locales/${locale}.w3mod/units/nightelfabilitystrings.txt`)
  );
  profile.load(
    readFile(`_locales/${locale}.w3mod/units/neutralabilitystrings.txt`)
  );
  profile.load(
    readFile(`_locales/${locale}.w3mod/units/commonabilitystrings.txt`)
  );
  profile.load(
    readFile(`_locales/${locale}.w3mod/units/campaignabilitystrings.txt`)
  );
  profile.load(
    readFile(`_locales/${locale}.w3mod/units/humanupgradestrings.txt`)
  );
  profile.load(
    readFile(`_locales/${locale}.w3mod/units/orcupgradestrings.txt`)
  );
  profile.load(
    readFile(`_locales/${locale}.w3mod/units/undeadupgradestrings.txt`)
  );
  profile.load(
    readFile(`_locales/${locale}.w3mod/units/nightelfupgradestrings.txt`)
  );
  profile.load(
    readFile(`_locales/${locale}.w3mod/units/neutralupgradestrings.txt`)
  );
  profile.load(readFile("units/upgradeskin.txt"));
  profile.load(
    readFile(`_locales/${locale}.w3mod/units/upgradeskinstrings.txt`)
  );
  profile.load(
    readFile(`_locales/${locale}.w3mod/units/campaignupgradestrings.txt`)
  );

  const unitAndItemMeta = new MappedData();
  unitAndItemMeta.load(readFile("units/unitmetadata.slk"));

  const unitData = new MappedData();
  unitData.load(readFile("units/unitdata.slk"));
  unitData.load(readFile("units/unitbalance.slk"));
  unitData.load(readFile("units/unitabilities.slk"));
  unitData.load(readFile("units/unitui.slk"));
  unitData.load(readFile("units/unitweapons.slk"));

  const itemData = new MappedData();
  itemData.load(readFile("units/itemdata.slk"));

  const destructableMeta = new MappedData();
  destructableMeta.load(readFile("units/destructablemetadata.slk"));

  const destructableData = new MappedData();
  destructableData.load(readFile("units/destructabledata.slk"));

  const doodadMeta = new MappedData();
  doodadMeta.load(readFile("doodads/doodadmetadata.slk"));

  const doodadData = new MappedData();
  doodadData.load(readFile("doodads/doodads.slk"));

  const abilityMeta = new MappedData();
  abilityMeta.load(readFile("units/abilitymetadata.slk"));

  const abilityData = new MappedData();
  abilityData.load(readFile("units/abilitydata.slk"));

  const buffMeta = new MappedData();
  buffMeta.load(readFile("units/abilitybuffmetadata.slk"));

  const buffData = new MappedData();
  buffData.load(readFile("units/abilitybuffdata.slk"));

  const upgradeMeta = new MappedData();
  upgradeMeta.load(readFile("units/upgrademetadata.slk"));
  // upgradeMeta.load(readFile('units/upgradeeffectmetadata.slk'));

  const upgradeData = new MappedData();
  upgradeData.load(readFile("units/upgradedata.slk"));

  return {
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
  };
}
