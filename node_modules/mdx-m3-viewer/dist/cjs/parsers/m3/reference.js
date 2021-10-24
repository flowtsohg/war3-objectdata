"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A reference.
 */
class Reference {
    constructor() {
        this.index = null;
        this.entries = 0;
        this.id = 0;
        this.flags = 0;
    }
    load(stream, index) {
        this.index = index;
        this.entries = stream.readUint32();
        this.id = stream.readUint32();
        this.flags = stream.readUint32();
    }
    /**
     * Get the entries this index entry references.
     */
    get() {
        if (this.index && this.id !== 0 && this.entries !== 0) {
            return this.index[this.id].entries;
        }
        return;
    }
    /**
     * Get the first entry this index entry references.
     */
    first() {
        const entries = this.get();
        if (entries) {
            return entries[0];
        }
        return;
    }
}
exports.default = Reference;
//# sourceMappingURL=reference.js.map