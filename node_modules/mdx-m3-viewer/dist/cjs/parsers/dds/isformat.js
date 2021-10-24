"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Detects if the given object is a DDS source.
 */
function isDds(bytes) {
    if (bytes instanceof ArrayBuffer) {
        bytes = new Uint8Array(bytes);
    }
    if (bytes instanceof Uint8Array) {
        if (bytes[0] === 0x44 && bytes[1] === 0x44 && bytes[2] === 0x53 && bytes[3] === 0x20) {
            return true;
        }
    }
    return false;
}
exports.default = isDds;
//# sourceMappingURL=isformat.js.map