"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_addon_1 = require("../../../common/gl-matrix-addon");
const animatedobject_1 = require("./animatedobject");
/**
 * An MDX camera.
 */
class Camera extends animatedobject_1.default {
    constructor(model, camera) {
        super(model, camera);
        this.name = camera.name;
        this.position = camera.position;
        this.fieldOfView = camera.fieldOfView;
        this.farClippingPlane = camera.farClippingPlane;
        this.nearClippingPlane = camera.nearClippingPlane;
        this.targetPosition = camera.targetPosition;
    }
    getTranslation(out, sequence, frame, counter) {
        return this.getVectorValue(out, 'KCTR', sequence, frame, counter, gl_matrix_addon_1.VEC3_ZERO);
    }
    getTargetTranslation(out, sequence, frame, counter) {
        return this.getVectorValue(out, 'KTTR', sequence, frame, counter, gl_matrix_addon_1.VEC3_ZERO);
    }
    getRotation(out, sequence, frame, counter) {
        return this.getScalarValue(out, 'KCRL', sequence, frame, counter, 0);
    }
}
exports.default = Camera;
//# sourceMappingURL=camera.js.map