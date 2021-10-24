"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An M3 texture.
 */
class M3Texture {
    constructor(repeatS, repeatT) {
        this.texture = null;
        this.wrapS = 0x812f; // CLAMP_TO_EDGE
        this.wrapT = 0x812f;
        if (repeatS) {
            this.wrapS = 0x2901; // REPEAT
        }
        if (repeatT) {
            this.wrapT = 0x2901;
        }
    }
}
exports.default = M3Texture;
//# sourceMappingURL=texture.js.map