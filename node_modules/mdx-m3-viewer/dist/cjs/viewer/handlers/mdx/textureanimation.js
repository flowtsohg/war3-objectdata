"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_addon_1 = require("../../../common/gl-matrix-addon");
const animatedobject_1 = require("./animatedobject");
/**
 * An MDX texture animation.
 */
class TextureAnimation extends animatedobject_1.default {
    constructor(model, textureAnimation) {
        super(model, textureAnimation);
        this.addVariants('KTAT', 'translation');
        this.addVariants('KTAR', 'rotation');
        this.addVariants('KTAS', 'scale');
    }
    getTranslation(out, sequence, frame, counter) {
        return this.getVectorValue(out, 'KTAT', sequence, frame, counter, gl_matrix_addon_1.VEC3_ZERO);
    }
    getRotation(out, sequence, frame, counter) {
        return this.getQuatValue(out, 'KTAR', sequence, frame, counter, gl_matrix_addon_1.QUAT_DEFAULT);
    }
    getScale(out, sequence, frame, counter) {
        return this.getVectorValue(out, 'KTAS', sequence, frame, counter, gl_matrix_addon_1.VEC3_ONE);
    }
}
exports.default = TextureAnimation;
//# sourceMappingURL=textureanimation.js.map