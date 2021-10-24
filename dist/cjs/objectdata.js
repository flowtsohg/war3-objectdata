"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectData = void 0;
const destructables_1 = require("./generated//destructables");
const doodads_1 = require("./generated/doodads");
const items_1 = require("./generated/items");
const units_1 = require("./generated/units");
class ObjectData {
    constructor() {
        this.units = new units_1.UnitContainer();
        this.items = new items_1.ItemContainer();
        this.destructables = new destructables_1.DestructableContainer();
        this.doodads = new doodads_1.DoodadContainer();
        // save(): ModificationFiles {
        //   const modifications: ModificationFiles = {};
        //   if (this.units.hasModifications()) {
        //     const file = new War3MapW3u();
        //     file.version = 2;
        //     this.units.save(file.originalTable, file.customTable);
        //     modifications.w3u = file;
        //   }
        //   if (this.items.hasModifications()) {
        //     const file = new War3MapW3u();
        //     file.version = 2;
        //     this.items.save(file.originalTable, file.customTable);
        //     modifications.w3t = file;
        //   }
        //   if (this.destructables.hasModifications()) {
        //     const file = new War3MapW3u();
        //     file.version = 2;
        //     this.destructables.save(file.originalTable, file.customTable);
        //     modifications.w3b = file;
        //   }
        //   if (this.doodads.hasModifications()) {
        //     const file = new War3MapW3d();
        //     file.version = 2;
        //     this.doodads.save(file.originalTable, file.customTable);
        //     modifications.w3d = file;
        //   }
        //   return modifications;
        // }
    }
    load({ w3u, w3t, w3b, w3d }) {
        if (w3u) {
            this.units.load(w3u.originalTable, w3u.customTable);
        }
        if (w3t) {
            this.items.load(w3t.originalTable, w3t.customTable);
        }
        if (w3b) {
            this.destructables.load(w3b.originalTable, w3b.customTable);
        }
        if (w3d) {
            this.doodads.load(w3d.originalTable, w3d.customTable);
        }
    }
}
exports.ObjectData = ObjectData;
//# sourceMappingURL=objectdata.js.map