"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genericobject_1 = require("./genericobject");
/**
 * An MDX bone.
 */
class Bone extends genericobject_1.default {
    constructor(model, bone, index) {
        super(model, bone, index);
        this.geosetAnimation = model.geosetAnimations[bone.geosetAnimationId];
    }
    getVisibility(out, sequence, frame, counter) {
        if (this.geosetAnimation) {
            return this.geosetAnimation.getAlpha(out, sequence, frame, counter);
        }
        out[0] = 1;
        return -1;
    }
}
exports.default = Bone;
//# sourceMappingURL=bone.js.map