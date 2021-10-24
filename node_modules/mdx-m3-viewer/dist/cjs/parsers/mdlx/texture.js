"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A texture.
 */
class Texture {
    constructor() {
        this.replaceableId = 0;
        this.path = '';
        this.wrapMode = 0 /* RepeatBoth */;
    }
    readMdx(stream) {
        this.replaceableId = stream.readUint32();
        this.path = stream.read(260);
        this.wrapMode = stream.readUint32();
    }
    writeMdx(stream) {
        stream.writeUint32(this.replaceableId);
        stream.skip(260 - stream.write(this.path));
        stream.writeUint32(this.wrapMode);
    }
    readMdl(stream) {
        for (const token of stream.readBlock()) {
            if (token === 'Image') {
                this.path = stream.read();
            }
            else if (token === 'ReplaceableId') {
                this.replaceableId = stream.readInt();
            }
            else if (token === 'WrapWidth') {
                this.wrapMode |= 1 /* WrapWidth */;
            }
            else if (token === 'WrapHeight') {
                this.wrapMode |= 2 /* WrapHeight */;
            }
            else {
                throw new Error(`Unknown token in Texture: "${token}"`);
            }
        }
    }
    writeMdl(stream) {
        stream.startBlock('Bitmap');
        if (this.path.length) {
            stream.writeStringAttrib('Image', this.path);
        }
        if (this.replaceableId !== 0) {
            stream.writeNumberAttrib('ReplaceableId', this.replaceableId);
        }
        if (this.wrapMode & 1 /* WrapWidth */) {
            stream.writeFlag(`WrapWidth`);
        }
        if (this.wrapMode & 2 /* WrapHeight */) {
            stream.writeFlag(`WrapHeight`);
        }
        stream.endBlock();
    }
}
exports.default = Texture;
//# sourceMappingURL=texture.js.map