"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genericobject_1 = require("./genericobject");
/**
 * An event object.
 */
class EventObject extends genericobject_1.default {
    constructor() {
        super(0x400);
        this.globalSequenceId = -1;
        this.tracks = new Uint32Array(0);
    }
    readMdx(stream) {
        super.readMdx(stream);
        stream.skip(4); // KEVT
        const count = stream.readUint32();
        this.globalSequenceId = stream.readInt32();
        this.tracks = stream.readUint32Array(count);
    }
    writeMdx(stream) {
        super.writeMdx(stream);
        stream.writeBinary('KEVT');
        stream.writeUint32(this.tracks.length);
        stream.writeInt32(this.globalSequenceId);
        stream.writeUint32Array(this.tracks);
    }
    readMdl(stream) {
        for (const token of super.readGenericBlock(stream)) {
            if (token === 'EventTrack') {
                const count = stream.readInt();
                this.tracks = new Uint32Array(count);
                stream.read(); // {
                if (stream.peek() === 'GlobalSeqId') {
                    stream.read();
                    this.globalSequenceId = stream.readInt();
                }
                for (let i = 0; i < count; i++) {
                    this.tracks[i] = stream.readInt();
                }
                stream.read(); // }
            }
            else {
                throw new Error(`Unknown token in EventObject: "${token}"`);
            }
        }
    }
    writeMdl(stream) {
        stream.startObjectBlock('EventObject', this.name);
        this.writeGenericHeader(stream);
        stream.startBlock('EventTrack', this.tracks.length);
        if (this.globalSequenceId !== -1) {
            stream.writeNumberAttrib('GlobalSeqId', this.globalSequenceId);
        }
        for (const track of this.tracks) {
            stream.writeFlag(`${track}`);
        }
        stream.endBlock();
        this.writeGenericAnimations(stream);
        stream.endBlock();
    }
    getByteLength() {
        return 12 + this.tracks.byteLength + super.getByteLength();
    }
}
exports.default = EventObject;
//# sourceMappingURL=eventobject.js.map