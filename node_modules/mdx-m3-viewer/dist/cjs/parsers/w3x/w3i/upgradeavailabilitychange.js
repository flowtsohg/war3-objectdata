"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An upgrade availability change.
 */
class UpgradeAvailabilityChange {
    constructor() {
        this.playerFlags = 0;
        this.id = '\0\0\0\0';
        this.levelAffected = 0;
        this.availability = 0;
    }
    load(stream) {
        this.playerFlags = stream.readUint32();
        this.id = stream.readBinary(4);
        this.levelAffected = stream.readInt32();
        this.availability = stream.readInt32();
    }
    save(stream) {
        stream.writeUint32(this.playerFlags);
        stream.writeBinary(this.id);
        stream.writeInt32(this.levelAffected);
        stream.writeInt32(this.availability);
    }
}
exports.default = UpgradeAvailabilityChange;
//# sourceMappingURL=upgradeavailabilitychange.js.map