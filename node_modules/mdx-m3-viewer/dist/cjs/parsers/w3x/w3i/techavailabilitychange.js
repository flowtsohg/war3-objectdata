"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A tech availablity change.
 */
class TechAvailabilityChange {
    constructor() {
        this.playerFlags = 0;
        this.id = '\0\0\0\0';
    }
    load(stream) {
        this.playerFlags = stream.readUint32();
        this.id = stream.readBinary(4);
    }
    save(stream) {
        stream.writeUint32(this.playerFlags);
        stream.writeBinary(this.id);
    }
}
exports.default = TechAvailabilityChange;
//# sourceMappingURL=techavailabilitychange.js.map