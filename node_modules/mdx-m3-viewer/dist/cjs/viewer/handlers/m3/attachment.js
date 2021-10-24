"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An M3 attachment.
 */
class M3Attachment {
    constructor(attachment) {
        this.name = attachment.name.get();
        this.bone = attachment.bone;
    }
}
exports.default = M3Attachment;
//# sourceMappingURL=attachment.js.map