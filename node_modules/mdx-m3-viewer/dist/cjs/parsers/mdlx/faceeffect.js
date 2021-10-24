"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A face effect.
 */
class FaceEffect {
    constructor() {
        this.type = '';
        this.path = '';
    }
    readMdx(stream) {
        this.type = stream.read(80);
        this.path = stream.read(260);
    }
    writeMdx(stream) {
        stream.skip(80 - stream.write(this.type));
        stream.skip(260 - stream.write(this.path));
    }
    readMdl(stream) {
        this.type = stream.read();
        for (const token of stream.readBlock()) {
            if (token === 'Path') {
                this.path = stream.read();
            }
            else {
                throw new Error(`Unknown token in FaceEffect: "${token}"`);
            }
        }
    }
    writeMdl(stream) {
        stream.startObjectBlock('FaceFX', this.type);
        stream.writeStringAttrib('Path', this.path);
        stream.endBlock();
    }
}
exports.default = FaceEffect;
//# sourceMappingURL=faceeffect.js.map