"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A terrain doodad.
 *
 * This type of doodad works much like cliffs.
 * It uses the height of the terrain, and gets affected by the ground heightmap.
 * It cannot be manipulated in any way in the World Editor once placed.
 * Indeed, the only way to change it is to remove it by changing cliffs around it.
 */
class TerrainDoodad {
    constructor() {
        this.id = '\0\0\0\0';
        this.u1 = 0;
        this.location = new Uint32Array(2);
    }
    load(stream, _version) {
        this.id = stream.readBinary(4);
        this.u1 = stream.readUint32();
        stream.readUint32Array(this.location);
    }
    save(stream, _version) {
        stream.writeBinary(this.id);
        stream.writeUint32(this.u1);
        stream.writeUint32Array(this.location);
    }
}
exports.default = TerrainDoodad;
//# sourceMappingURL=terraindoodad.js.map