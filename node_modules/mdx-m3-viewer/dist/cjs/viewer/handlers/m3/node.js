"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = require("gl-matrix");
const skeletalnode_1 = require("../../skeletalnode");
/**
 * An M3 node.
 */
class M3Node extends skeletalnode_1.SkeletalNode {
    convertBasis(rotation) {
        const halfPI = Math.PI / 2;
        gl_matrix_1.quat.rotateZ(rotation, rotation, halfPI);
        gl_matrix_1.quat.rotateY(rotation, rotation, -halfPI);
    }
}
exports.default = M3Node;
//# sourceMappingURL=node.js.map