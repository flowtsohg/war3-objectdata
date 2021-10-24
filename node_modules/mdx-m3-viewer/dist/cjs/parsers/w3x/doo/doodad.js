"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const randomitemset_1 = require("./randomitemset");
/**
 * A doodad.
 */
class Doodad {
    constructor() {
        this.id = '\0\0\0\0';
        this.variation = 0;
        this.location = new Float32Array(3);
        this.angle = 0;
        this.scale = new Float32Array([1, 1, 1]);
        /**
         * @since Game version 1.32
         */
        this.skin = '\0\0\0\0';
        this.flags = 0;
        this.life = 0;
        this.itemTable = -1;
        this.itemSets = [];
        this.editorId = 0;
        this.u1 = new Uint8Array(8);
    }
    load(stream, version, buildVersion) {
        this.id = stream.readBinary(4);
        this.variation = stream.readInt32();
        stream.readFloat32Array(this.location);
        this.angle = stream.readFloat32();
        stream.readFloat32Array(this.scale);
        if (buildVersion > 131) {
            this.skin = stream.readBinary(4);
        }
        this.flags = stream.readUint8();
        this.life = stream.readUint8();
        if (version > 7) {
            this.itemTable = stream.readUint32();
            for (let i = 0, l = stream.readUint32(); i < l; i++) {
                const itemSet = new randomitemset_1.default();
                itemSet.load(stream);
                this.itemSets.push(itemSet);
            }
        }
        this.editorId = stream.readInt32();
    }
    save(stream, version, buildVersion) {
        stream.writeBinary(this.id);
        stream.writeInt32(this.variation);
        stream.writeFloat32Array(this.location);
        stream.writeFloat32(this.angle);
        stream.writeFloat32Array(this.scale);
        if (buildVersion > 131) {
            stream.writeBinary(this.skin);
        }
        stream.writeUint8(this.flags);
        stream.writeUint8(this.life);
        if (version > 7) {
            stream.writeUint32(this.itemTable);
            stream.writeUint32(this.itemSets.length);
            for (const itemSet of this.itemSets) {
                itemSet.save(stream);
            }
        }
        stream.writeInt32(this.editorId);
    }
    getByteLength(version, buildVersion) {
        let size = 42;
        if (buildVersion > 131) {
            size += 4;
        }
        if (version > 7) {
            size += 8;
            for (const itemSet of this.itemSets) {
                size += itemSet.getByteLength();
            }
        }
        return size;
    }
}
exports.default = Doodad;
//# sourceMappingURL=doodad.js.map