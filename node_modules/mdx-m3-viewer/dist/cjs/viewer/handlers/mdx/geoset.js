"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const batch_1 = require("./batch");
/**
 * A geoset.
 */
class Geoset {
    constructor(model, index, positionOffset, normalOffset, uvOffset, tangentOffset, skinOffset, faceOffset, vertices, elements, faceType) {
        this.geosetAnimation = null;
        this.model = model;
        this.index = index;
        this.positionOffset = positionOffset;
        this.normalOffset = normalOffset;
        this.uvOffset = uvOffset;
        this.tangentOffset = tangentOffset;
        this.skinOffset = skinOffset;
        this.faceOffset = faceOffset;
        this.vertices = vertices;
        this.elements = elements;
        this.faceType = faceType;
        for (const geosetAnimation of model.geosetAnimations) {
            if (geosetAnimation.geosetId === index) {
                this.geosetAnimation = geosetAnimation;
            }
        }
    }
    bindShared(gl, attribs, coordId) {
        gl.vertexAttribPointer(attribs['a_position'], 3, gl.FLOAT, false, 0, this.positionOffset);
        gl.vertexAttribPointer(attribs['a_normal'], 3, gl.FLOAT, false, 0, this.normalOffset);
        gl.vertexAttribPointer(attribs['a_uv'], 2, gl.FLOAT, false, 0, this.uvOffset + coordId * this.vertices * 8);
    }
    bindVertexGroups(gl, attribs) {
        const model = this.model;
        const skinDataType = model.skinDataType;
        const bytesPerSkinElement = model.bytesPerSkinElement;
        gl.vertexAttribPointer(attribs['a_bones'], 4, skinDataType, false, 5 * bytesPerSkinElement, this.skinOffset);
        gl.vertexAttribPointer(attribs['a_boneNumber'], 1, skinDataType, false, 5 * bytesPerSkinElement, this.skinOffset + 4 * bytesPerSkinElement);
    }
    bindVertexGroupsExtended(gl, attribs) {
        const model = this.model;
        const skinDataType = model.skinDataType;
        const bytesPerSkinElement = model.bytesPerSkinElement;
        gl.vertexAttribPointer(attribs['a_bones'], 4, skinDataType, false, 9 * bytesPerSkinElement, this.skinOffset);
        gl.vertexAttribPointer(attribs['a_extendedBones'], 4, skinDataType, false, 9 * bytesPerSkinElement, this.skinOffset + 4 * bytesPerSkinElement);
        gl.vertexAttribPointer(attribs['a_boneNumber'], 1, skinDataType, false, 9 * bytesPerSkinElement, this.skinOffset + 8 * bytesPerSkinElement);
    }
    bindSkin(gl, attribs) {
        gl.vertexAttribPointer(attribs['a_bones'], 4, gl.UNSIGNED_BYTE, false, 8, this.skinOffset);
        gl.vertexAttribPointer(attribs['a_weights'], 4, gl.UNSIGNED_BYTE, true, 8, this.skinOffset + 4);
    }
    bind(shader, coordId) {
        const gl = this.model.viewer.gl;
        const attribs = shader.attribs;
        this.bindShared(gl, attribs, coordId);
        this.bindVertexGroups(gl, attribs);
    }
    bindExtended(shader, coordId) {
        const gl = this.model.viewer.gl;
        const attribs = shader.attribs;
        this.bindShared(gl, attribs, coordId);
        this.bindVertexGroupsExtended(gl, attribs);
    }
    bindHd(shader, skinningType, coordId) {
        const gl = this.model.viewer.gl;
        const attribs = shader.attribs;
        this.bindShared(gl, attribs, coordId);
        gl.vertexAttribPointer(attribs['a_tangent'], 4, gl.FLOAT, false, 0, this.tangentOffset);
        if (skinningType === batch_1.SkinningType.Skin) {
            this.bindSkin(gl, attribs);
        }
        else if (skinningType === batch_1.SkinningType.ExtendedVertexGroups) {
            this.bindVertexGroupsExtended(gl, attribs);
        }
        else {
            this.bindVertexGroups(gl, attribs);
        }
    }
    render() {
        const gl = this.model.viewer.gl;
        gl.drawElements(this.faceType, this.elements, gl.UNSIGNED_SHORT, this.faceOffset);
    }
}
exports.default = Geoset;
//# sourceMappingURL=geoset.js.map