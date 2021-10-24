"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animatedobject_1 = require("./animatedobject");
/**
 * A texture animation.
 */
class TextureAnimation extends animatedobject_1.default {
    readMdx(stream) {
        const size = stream.readUint32();
        this.readAnimations(stream, size - 4);
    }
    writeMdx(stream) {
        stream.writeUint32(this.getByteLength());
        this.writeAnimations(stream);
    }
    readMdl(stream) {
        for (const token of stream.readBlock()) {
            if (token === 'Translation') {
                this.readAnimation(stream, 'KTAT');
            }
            else if (token === 'Rotation') {
                this.readAnimation(stream, 'KTAR');
            }
            else if (token === 'Scaling') {
                this.readAnimation(stream, 'KTAS');
            }
            else {
                throw new Error(`Unknown token in TextureAnimation: "${token}"`);
            }
        }
    }
    writeMdl(stream) {
        stream.startBlock('TVertexAnim ');
        this.writeAnimation(stream, 'KTAT');
        this.writeAnimation(stream, 'KTAR');
        this.writeAnimation(stream, 'KTAS');
        stream.endBlock();
    }
    getByteLength() {
        return 4 + super.getByteLength();
    }
}
exports.default = TextureAnimation;
//# sourceMappingURL=textureanimation.js.map