"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bounds_1 = require("../../bounds");
/**
 * An MDX sequence.
 */
class Sequence {
    constructor(sequence) {
        this.name = sequence.name;
        this.interval = sequence.interval;
        this.nonLooping = sequence.nonLooping;
        this.rarity = sequence.rarity;
        this.bounds = new bounds_1.default();
        const extent = sequence.extent;
        this.bounds.fromExtents(extent.min, extent.max);
    }
}
exports.default = Sequence;
//# sourceMappingURL=sequence.js.map