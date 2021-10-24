"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An M3 sequence.
 */
class M3Sequence {
    constructor(sequence) {
        this.name = sequence.name.get();
        this.interval = sequence.interval;
        this.movementSpeed = sequence.movementSpeed;
        this.frequency = sequence.frequency;
        this.boundingSphere = sequence.boundingSphere;
        this.flags = sequence.flags;
    }
}
exports.default = M3Sequence;
//# sourceMappingURL=sequence.js.map