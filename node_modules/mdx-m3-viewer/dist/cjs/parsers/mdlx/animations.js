"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector4Animation = exports.Vector3Animation = exports.FloatAnimation = exports.UintAnimation = exports.Animation = void 0;
/**
 * An animation.
 */
class Animation {
    constructor() {
        this.name = '';
        this.interpolationType = 0 /* DontInterp */;
        this.globalSequenceId = -1;
        this.frames = [];
        this.values = [];
        this.inTans = [];
        this.outTans = [];
    }
    readMdx(stream, name) {
        const frames = this.frames;
        const values = this.values;
        const inTans = this.inTans;
        const outTans = this.outTans;
        const tracksCount = stream.readUint32();
        const interpolationType = stream.readUint32();
        this.name = name;
        this.interpolationType = interpolationType;
        this.globalSequenceId = stream.readInt32();
        for (let i = 0; i < tracksCount; i++) {
            frames.push(stream.readInt32());
            values.push(this.readMdxValue(stream));
            if (interpolationType > 1) {
                inTans.push(this.readMdxValue(stream));
                outTans.push(this.readMdxValue(stream));
            }
        }
    }
    writeMdx(stream) {
        const interpolationType = this.interpolationType;
        const frames = this.frames;
        const values = this.values;
        const inTans = this.inTans;
        const outTans = this.outTans;
        const tracksCount = frames.length;
        stream.writeBinary(this.name);
        stream.writeUint32(tracksCount);
        stream.writeUint32(interpolationType);
        stream.writeInt32(this.globalSequenceId);
        for (let i = 0; i < tracksCount; i++) {
            stream.writeInt32(frames[i]);
            this.writeMdxValue(stream, values[i]);
            if (interpolationType > 1 /* Linear */) {
                this.writeMdxValue(stream, inTans[i]);
                this.writeMdxValue(stream, outTans[i]);
            }
        }
    }
    readMdl(stream, name) {
        const frames = this.frames;
        const values = this.values;
        const inTans = this.inTans;
        const outTans = this.outTans;
        this.name = name;
        const tracksCount = stream.readInt();
        stream.read(); // {
        let interpolationType = 0;
        const token = stream.read();
        if (token === 'DontInterp') {
            interpolationType = 0 /* DontInterp */;
        }
        else if (token === 'Linear') {
            interpolationType = 1 /* Linear */;
        }
        else if (token === 'Hermite') {
            interpolationType = 2 /* Hermite */;
        }
        else if (token === 'Bezier') {
            interpolationType = 3 /* Bezier */;
        }
        this.interpolationType = interpolationType;
        // GlobalSeqId only exists if it's not -1.
        if (stream.peek() === 'GlobalSeqId') {
            stream.read();
            this.globalSequenceId = stream.readInt();
        }
        for (let i = 0; i < tracksCount; i++) {
            frames[i] = stream.readInt();
            values[i] = this.readMdlValue(stream);
            if (interpolationType > 1 /* Linear */) {
                stream.read(); // InTan
                inTans[i] = this.readMdlValue(stream);
                stream.read(); // OutTan
                outTans[i] = this.readMdlValue(stream);
            }
        }
        stream.read(); // }
    }
    writeMdl(stream, name) {
        const interpolationType = this.interpolationType;
        const frames = this.frames;
        const values = this.values;
        const inTans = this.inTans;
        const outTans = this.outTans;
        const tracksCount = frames.length;
        stream.startBlock(name, this.frames.length);
        let token = '';
        if (this.interpolationType === 0 /* DontInterp */) {
            token = 'DontInterp';
        }
        else if (this.interpolationType === 1 /* Linear */) {
            token = 'Linear';
        }
        else if (this.interpolationType === 2 /* Hermite */) {
            token = 'Hermite';
        }
        else if (this.interpolationType === 3 /* Bezier */) {
            token = 'Bezier';
        }
        stream.writeFlag(token);
        if (this.globalSequenceId !== -1) {
            stream.writeNumberAttrib('GlobalSeqId', this.globalSequenceId);
        }
        for (let i = 0; i < tracksCount; i++) {
            this.writeMdlValue(stream, `${frames[i]}:`, values[i]);
            if (interpolationType > 1 /* Linear */) {
                stream.indent();
                this.writeMdlValue(stream, 'InTan', inTans[i]);
                this.writeMdlValue(stream, 'OutTan', outTans[i]);
                stream.unindent();
            }
        }
        stream.endBlock();
    }
    getByteLength() {
        const tracksCount = this.frames.length;
        let size = 16;
        if (tracksCount) {
            const bytesPerValue = this.values[0].byteLength;
            let valuesPerTrack = 1;
            if (this.interpolationType > 1 /* Linear */) {
                valuesPerTrack = 3;
            }
            size += (4 + valuesPerTrack * bytesPerValue) * tracksCount;
        }
        return size;
    }
}
exports.Animation = Animation;
/**
 * A uint animation.
 */
class UintAnimation extends Animation {
    readMdxValue(stream) {
        return stream.readUint32Array(1);
    }
    writeMdxValue(stream, value) {
        stream.writeUint32(value[0]);
    }
    readMdlValue(stream) {
        return new Uint32Array([stream.readInt()]);
    }
    writeMdlValue(stream, name, value) {
        stream.writeNumberAttrib(name, value[0]);
    }
}
exports.UintAnimation = UintAnimation;
/**
 * A float animation
 */
class FloatAnimation extends Animation {
    readMdxValue(stream) {
        return stream.readFloat32Array(1);
    }
    writeMdxValue(stream, value) {
        stream.writeFloat32(value[0]);
    }
    readMdlValue(stream) {
        return new Float32Array([stream.readFloat()]);
    }
    writeMdlValue(stream, name, value) {
        stream.writeNumberAttrib(name, value[0]);
    }
}
exports.FloatAnimation = FloatAnimation;
/**
 * A vector 3 animation.
 */
class Vector3Animation extends Animation {
    readMdxValue(stream) {
        return stream.readFloat32Array(3);
    }
    writeMdxValue(stream, value) {
        stream.writeFloat32Array(value);
    }
    readMdlValue(stream) {
        return stream.readVector(new Float32Array(3));
    }
    writeMdlValue(stream, name, value) {
        stream.writeVectorAttrib(name, value);
    }
}
exports.Vector3Animation = Vector3Animation;
/**
 * A vector 4 animation.
 */
class Vector4Animation extends Animation {
    readMdxValue(stream) {
        return stream.readFloat32Array(4);
    }
    writeMdxValue(stream, value) {
        stream.writeFloat32Array(value);
    }
    readMdlValue(stream) {
        return stream.readVector(new Float32Array(4));
    }
    writeMdlValue(stream, name, value) {
        stream.writeVectorAttrib(name, value);
    }
}
exports.Vector4Animation = Vector4Animation;
//# sourceMappingURL=animations.js.map