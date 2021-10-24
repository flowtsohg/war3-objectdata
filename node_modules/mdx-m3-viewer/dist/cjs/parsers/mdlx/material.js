"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const layer_1 = require("./layer");
/**
 * A material.
 */
class Material {
    constructor() {
        this.priorityPlane = 0;
        this.flags = 0 /* None */;
        /**
         * @since 900
         */
        this.shader = '';
        this.layers = [];
    }
    readMdx(stream, version) {
        stream.readUint32(); // Don't care about the size.
        this.priorityPlane = stream.readInt32();
        this.flags = stream.readUint32();
        if (version > 800) {
            this.shader = stream.read(80);
        }
        stream.skip(4); // LAYS
        for (let i = 0, l = stream.readUint32(); i < l; i++) {
            const layer = new layer_1.default();
            layer.readMdx(stream, version);
            this.layers.push(layer);
        }
    }
    writeMdx(stream, version) {
        stream.writeUint32(this.getByteLength(version));
        stream.writeInt32(this.priorityPlane);
        stream.writeUint32(this.flags);
        if (version > 800) {
            stream.skip(80 - stream.write(this.shader));
        }
        stream.writeBinary('LAYS');
        stream.writeUint32(this.layers.length);
        for (const layer of this.layers) {
            layer.writeMdx(stream, version);
        }
    }
    readMdl(stream) {
        for (const token of stream.readBlock()) {
            if (token === 'ConstantColor') {
                this.flags |= 1 /* ConstantColor */;
            }
            else if (token === 'TwoSided') {
                this.flags |= 2 /* TwoSided */;
            }
            else if (token === 'SortPrimsNearZ') {
                this.flags |= 8 /* SortPrimsNearZ */;
            }
            else if (token === 'SortPrimsFarZ') {
                this.flags |= 16 /* SortPrimsFarZ */;
            }
            else if (token === 'FullResolution') {
                this.flags |= 32 /* FullResolution */;
            }
            else if (token === 'PriorityPlane') {
                this.priorityPlane = stream.readInt();
            }
            else if (token === 'Shader') {
                this.shader = stream.read();
            }
            else if (token === 'Layer') {
                const layer = new layer_1.default();
                layer.readMdl(stream);
                this.layers.push(layer);
            }
            else {
                throw new Error(`Unknown token in Material: "${token}"`);
            }
        }
    }
    writeMdl(stream, version) {
        stream.startBlock('Material');
        if (this.flags & 1 /* ConstantColor */) {
            stream.writeFlag('ConstantColor');
        }
        if (version > 800) {
            if (this.flags & 2 /* TwoSided */) {
                stream.writeFlag('TwoSided');
            }
        }
        if (this.flags & 8 /* SortPrimsNearZ */) {
            stream.writeFlag('SortPrimsNearZ');
        }
        if (this.flags & 16 /* SortPrimsFarZ */) {
            stream.writeFlag('SortPrimsFarZ');
        }
        if (this.flags & 32 /* FullResolution */) {
            stream.writeFlag('FullResolution');
        }
        if (this.priorityPlane !== 0) {
            stream.writeNumberAttrib('PriorityPlane', this.priorityPlane);
        }
        if (version > 800) {
            stream.writeStringAttrib('Shader', this.shader);
        }
        for (const layer of this.layers) {
            layer.writeMdl(stream, version);
        }
        stream.endBlock();
    }
    getByteLength(version) {
        let size = 20;
        if (version > 800) {
            size += 80;
        }
        for (const layer of this.layers) {
            size += layer.getByteLength(version);
        }
        return size;
    }
}
exports.default = Material;
//# sourceMappingURL=material.js.map