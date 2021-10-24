"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = require("gl-matrix");
const skeletalnode_1 = require("../../skeletalnode");
/**
 * An MDX node.
 */
class MdxNode extends skeletalnode_1.SkeletalNode {
    convertBasis(rotation) {
        gl_matrix_1.quat.rotateY(rotation, rotation, -Math.PI / 2);
        gl_matrix_1.quat.rotateX(rotation, rotation, -Math.PI / 2);
    }
}
exports.default = MdxNode;
//# sourceMappingURL=node.js.map