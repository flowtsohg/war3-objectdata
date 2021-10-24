"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = require("gl-matrix");
const gl_matrix_addon_1 = require("../../../common/gl-matrix-addon");
const animatedobject_1 = require("./animatedobject");
/**
 * An MDX generic object.
 */
class GenericObject extends animatedobject_1.default {
    constructor(model, object, index) {
        super(model, object);
        this.index = index;
        this.name = object.name;
        this.objectId = object.objectId;
        this.parentId = object.parentId;
        this.pivot = model.pivotPoints[object.objectId] || gl_matrix_1.vec3.create();
        const flags = object.flags;
        this.dontInheritTranslation = (flags & 1 /* DontInheritTranslation */) > 0;
        this.dontInheritRotation = (flags & 4 /* DontInheritRotation */) > 0;
        this.dontInheritScaling = (flags & 2 /* DontInheritScaling */) > 0;
        this.billboarded = (flags & 8 /* Billboarded */) > 0;
        this.billboardedX = (flags & 16 /* BillboardedLockX */) > 0;
        this.billboardedY = (flags & 32 /* BillboardedLockY */) > 0;
        this.billboardedZ = (flags & 64 /* BillboardedLockZ */) > 0;
        this.cameraAnchored = (flags & 128 /* CameraAnchored */) > 0;
        this.anyBillboarding = this.billboarded || this.billboardedX || this.billboardedY || this.billboardedZ;
        if (object.objectId === object.parentId) {
            this.parentId = -1;
        }
        this.addVariants('KGTR', 'translation');
        this.addVariants('KGRT', 'rotation');
        this.addVariants('KGSC', 'scale');
        this.addVariantIntersection(['translation', 'rotation', 'scale'], 'generic');
    }
    /**
     * Give a consistent visibility getter for all generic objects.
     *
     * Many of the generic objects have animated visibilities, and will override this.
     */
    getVisibility(out, _sequence, _frame, _counter) {
        out[0] = 1;
        return -1;
    }
    getTranslation(out, sequence, frame, counter) {
        return this.getVectorValue(out, 'KGTR', sequence, frame, counter, gl_matrix_addon_1.VEC3_ZERO);
    }
    getRotation(out, sequence, frame, counter) {
        return this.getQuatValue(out, 'KGRT', sequence, frame, counter, gl_matrix_addon_1.QUAT_DEFAULT);
    }
    getScale(out, sequence, frame, counter) {
        return this.getVectorValue(out, 'KGSC', sequence, frame, counter, gl_matrix_addon_1.VEC3_ONE);
    }
}
exports.default = GenericObject;
//# sourceMappingURL=genericobject.js.map