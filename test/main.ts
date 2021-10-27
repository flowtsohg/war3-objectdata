import { readFileSync } from "fs";
import War3Map from "mdx-m3-viewer/dist/cjs/parsers/w3x/map";
import { ObjectData, Unit, Units, Item, Items, Destructable, Destructables, Doodad, Doodads, Abilities, Buff, Buffs/*, Upgrades*/ } from "../dist/cjs";

const objectData = new ObjectData();

const map = new War3Map();

map.load(readFileSync('test/testmap.w3m').buffer);

const inputModifications = map.readModifications();

objectData.load(inputModifications);

console.log(objectData.units.get('hpea'));
console.log(objectData.items.get(Items.AlleriasFluteOfAccuracy));
console.log(objectData.destructables.get(Destructables.AshenvaleCanopyTree));
console.log(objectData.doodads.get(Doodads.AlonsusChapel));
console.log(objectData.abilities.get(Abilities.Blizzard));

// const blizzard = objectData.abilities.game[Abilities.Blizzard];
// blizzard.numberOfShards = 5;

// console.log(objectData.buffs.get(Buffs.Blizzard));
// console.log(objectData.upgrades.get(Upgrades.FlakCannons));

const paladin = <Unit>objectData.units.copy(Units.Paladin);
paladin.name = 'Not a Paladin';

const outputModifications = objectData.save();

console.log(outputModifications);
