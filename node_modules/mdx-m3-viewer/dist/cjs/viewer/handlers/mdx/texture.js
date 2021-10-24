"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An MDX texture.
 */
class MdxTexture {
    constructor(replaceableId, wrapMode) {
        this.texture = null;
        this.wrapS = 0x812f; // CLAMP_TO_EDGE
        this.wrapT = 0x812f;
        this.replaceableId = replaceableId;
        if (wrapMode & 1 /* WrapWidth */) {
            this.wrapS = 0x2901; // REPEAT
        }
        if (wrapMode & 2 /* WrapHeight */) {
            this.wrapT = 0x2901;
        }
    }
}
exports.default = MdxTexture;
//# sourceMappingURL=texture.js.map