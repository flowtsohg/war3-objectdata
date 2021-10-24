"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A modified ability.
 */
class ModifiedAbility {
    constructor() {
        this.id = '\0\0\0\0';
        this.activeForAutocast = 0;
        this.heroLevel = 1;
    }
    load(stream) {
        this.id = stream.readBinary(4);
        this.activeForAutocast = stream.readInt32();
        this.heroLevel = stream.readInt32();
    }
    save(stream) {
        stream.writeBinary(this.id);
        stream.writeInt32(this.activeForAutocast);
        stream.writeInt32(this.heroLevel);
    }
}
exports.default = ModifiedAbility;
//# sourceMappingURL=modifiedability.js.map