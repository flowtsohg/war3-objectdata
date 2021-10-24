"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An M3 region.
 */
class M3Region {
    constructor(model, region, triangles, elementArray, offset) {
        const firstVertexIndex = region.firstVertexIndex;
        const triangleIndicesCount = region.triangleIndicesCount;
        const firstTriangleIndex = region.firstTriangleIndex;
        // Note for implementors: the one original vertex indices array could be used with access to the base-vertex draw elements function.
        // See https://www.opengl.org/sdk/docs/man3/xhtml/glDrawElementsBaseVertex.xml
        // firstTriangleIndex is the indices offset.
        // firstVertexIndex is the base vertex.
        for (let i = 0; i < triangleIndicesCount; i++) {
            elementArray[offset + i] = triangles[firstTriangleIndex + i] + firstVertexIndex;
        }
        this.gl = model.viewer.gl;
        this.firstBoneLookupIndex = region.firstBoneLookupIndex;
        this.boneWeightPairsCount = region.boneWeightPairsCount;
        this.offset = offset * 2;
        this.verticesCount = region.verticesCount;
        this.elements = triangleIndicesCount;
    }
    render(shader) {
        const gl = this.gl;
        gl.uniform1f(shader.uniforms['u_firstBoneLookupIndex'], this.firstBoneLookupIndex);
        gl.uniform1f(shader.uniforms['u_boneWeightPairsCount'], this.boneWeightPairsCount);
        gl.drawElements(gl.TRIANGLES, this.elements, gl.UNSIGNED_SHORT, this.offset);
    }
}
exports.default = M3Region;
//# sourceMappingURL=region.js.map