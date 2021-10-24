"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binarystream_1 = require("../../../common/binarystream");
const sound_1 = require("./sound");
/**
 * war3map.w3s - the sound file.
 */
class War3MapW3s {
    constructor() {
        this.version = 0;
        this.sounds = [];
    }
    load(buffer) {
        const stream = new binarystream_1.default(buffer);
        this.version = stream.readInt32();
        for (let i = 0, l = stream.readUint32(); i < l; i++) {
            const sound = new sound_1.default();
            sound.load(stream, this.version);
            this.sounds[i] = sound;
        }
    }
    save() {
        const stream = new binarystream_1.default(new ArrayBuffer(this.getByteLength()));
        stream.writeInt32(this.version);
        stream.writeUint32(this.sounds.length);
        for (const sound of this.sounds) {
            sound.save(stream, this.version);
        }
        return stream.uint8array;
    }
    getByteLength() {
        let size = 8;
        for (const sound of this.sounds) {
            size += sound.getByteLength(this.version);
        }
        return size;
    }
}
exports.default = War3MapW3s;
//# sourceMappingURL=file.js.map