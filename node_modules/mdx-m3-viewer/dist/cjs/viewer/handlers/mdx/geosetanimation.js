"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = require("gl-matrix");
const animatedobject_1 = require("./animatedobject");
/**
 * A geoset animation.
 */
class GeosetAnimation extends animatedobject_1.default {
    constructor(model, geosetAnimation) {
        super(model, geosetAnimation);
        const color = geosetAnimation.color;
        this.alpha = geosetAnimation.alpha;
        this.color = gl_matrix_1.vec3.fromValues(color[2], color[1], color[0]); // Stored as RGB, but animated colors are stored as BGR, so sizzle.
        this.geosetId = geosetAnimation.geosetId;
        this.addVariants('KGAO', 'alpha');
        this.addVariants('KGAC', 'color');
    }
    getAlpha(out, sequence, frame, counter) {
        return this.getScalarValue(out, 'KGAO', sequence, frame, counter, this.alpha);
    }
    getColor(out, sequence, frame, counter) {
        return this.getVectorValue(out, 'KGAC', sequence, frame, counter, this.color);
    }
}
exports.default = GeosetAnimation;
//# sourceMappingURL=geosetanimation.js.map