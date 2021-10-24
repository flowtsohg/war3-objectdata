import { readFileSync } from "fs";
import War3Map from "mdx-m3-viewer/dist/cjs/parsers/w3x/map";
import { ObjectData, Units, Items, Destructables, Doodads, Unit } from "../src";

const objectData = new ObjectData();

const map = new War3Map();

map.load(readFileSync('test/testmap.w3m').buffer);

const inputModifications = map.readModifications();

objectData.load(inputModifications);

console.log(objectData.units.get('hpea'));
console.log(objectData.items.get(Items.AlleriasFluteOfAccuracy));
console.log(objectData.destructables.get(Destructables.AshenvaleCanopyTree));
console.log(objectData.doodads.get(Doodads.AlonsusChapel));

const paladin = <Unit>objectData.units.get(Units.Paladin);
paladin.name = 'Not a Paladin';

const outputModifications = objectData.save();
