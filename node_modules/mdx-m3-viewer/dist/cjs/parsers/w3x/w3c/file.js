"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binarystream_1 = require("../../../common/binarystream");
const camera_1 = require("./camera");
/**
 * war3map.w3c - the camera file.
 */
class War3MapW3c {
    constructor() {
        this.version = 0;
        this.cameras = [];
    }
    load(buffer, buildVersion) {
        const stream = new binarystream_1.default(buffer);
        this.version = stream.readInt32();
        for (let i = 0, l = stream.readUint32(); i < l; i++) {
            const camera = new camera_1.default();
            camera.load(stream, buildVersion);
            this.cameras[i] = camera;
        }
    }
    save(buildVersion) {
        const stream = new binarystream_1.default(new ArrayBuffer(this.getByteLength(buildVersion)));
        stream.writeInt32(this.version);
        stream.writeUint32(this.cameras.length);
        for (const camera of this.cameras) {
            camera.save(stream, buildVersion);
        }
        return stream.uint8array;
    }
    getByteLength(buildVersion) {
        let size = 8;
        for (const camera of this.cameras) {
            size += camera.getByteLength(buildVersion);
        }
        return size;
    }
}
exports.default = War3MapW3c;
//# sourceMappingURL=file.js.map