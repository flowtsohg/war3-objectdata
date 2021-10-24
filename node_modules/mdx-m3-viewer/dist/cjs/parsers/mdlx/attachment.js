"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genericobject_1 = require("./genericobject");
/**
 * An attachment.
 */
class Attachment extends genericobject_1.default {
    constructor() {
        super(0x800);
        this.path = '';
        this.attachmentId = 0;
    }
    readMdx(stream) {
        const start = stream.index;
        const size = stream.readUint32();
        super.readMdx(stream);
        this.path = stream.read(260);
        this.attachmentId = stream.readInt32();
        this.readAnimations(stream, size - (stream.index - start));
    }
    writeMdx(stream) {
        stream.writeUint32(this.getByteLength());
        super.writeMdx(stream);
        stream.skip(260 - stream.write(this.path));
        stream.writeInt32(this.attachmentId);
        this.writeNonGenericAnimationChunks(stream);
    }
    readMdl(stream) {
        for (const token of super.readGenericBlock(stream)) {
            if (token === 'AttachmentID') {
                this.attachmentId = stream.readInt();
            }
            else if (token === 'Path') {
                this.path = stream.read();
            }
            else if (token === 'Visibility') {
                this.readAnimation(stream, 'KATV');
            }
            else {
                throw new Error(`Unknown token in Attachment ${this.name}: "${token}"`);
            }
        }
    }
    writeMdl(stream) {
        stream.startObjectBlock('Attachment', this.name);
        this.writeGenericHeader(stream);
        stream.writeNumberAttrib('AttachmentID', this.attachmentId); // Is this needed? MDX supplies it, but MdlxConv does not use it.
        if (this.path.length) {
            stream.writeStringAttrib('Path', this.path);
        }
        this.writeAnimation(stream, 'KATV');
        this.writeGenericAnimations(stream);
        stream.endBlock();
    }
    getByteLength() {
        return 268 + super.getByteLength();
    }
}
exports.default = Attachment;
//# sourceMappingURL=attachment.js.map