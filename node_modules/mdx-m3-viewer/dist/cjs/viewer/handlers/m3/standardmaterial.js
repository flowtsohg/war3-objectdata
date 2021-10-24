"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.M3StandardMaterial = exports.STANDARD_MATERIAL_OFFSET = void 0;
const layer_1 = require("./layer");
exports.STANDARD_MATERIAL_OFFSET = 100;
/**
 * An M3 standard material.
 */
class M3StandardMaterial {
    constructor(model, index, material) {
        this.model = model;
        this.gl = model.viewer.gl;
        this.index = index;
        this.name = material.name.get();
        this.flags = material.flags;
        this.blendMode = material.blendMode;
        this.priority = material.priority;
        this.specularity = material.specularity;
        this.specMult = material.specMult;
        this.emisMult = material.emisMult;
        this.layerBlendType = material.layerBlendType;
        this.emisBlendType = material.emisBlendType;
        this.emisMode = material.emisMode;
        this.doubleSided = material.flags & 0x8;
        this.layers = [
            new layer_1.default(this, 0, material.diffuseLayer, 'diffuse', 2),
            new layer_1.default(this, 1, material.decalLayer, 'decal', 2),
            new layer_1.default(this, 2, material.specularLayer, 'specular', 2),
            new layer_1.default(this, 3, material.glossLayer, 'gloss', 2),
            new layer_1.default(this, 4, material.emissiveLayer, 'emissive', material.emisBlendType),
            new layer_1.default(this, 5, material.emissive2Layer, 'emissive2', material.emisMode),
            new layer_1.default(this, 6, material.evioLayer, 'evio', 2),
            new layer_1.default(this, 7, material.evioMaskLayer, 'evioMask', 2),
            new layer_1.default(this, 8, material.alphaMaskLayer, 'alphaMask', 2),
            new layer_1.default(this, 9, material.alphaMask2Layer, 'alphaMask2', 2),
            new layer_1.default(this, 10, material.normalLayer, 'normal', 2),
            new layer_1.default(this, 11, material.heightLayer, 'heightMap', 2),
            new layer_1.default(this, 12, material.lightMapLayer, 'lightMap', 2),
            new layer_1.default(this, 13, material.ambientOcclusionLayer, 'ao', 2),
        ];
    }
    bindCommon() {
        const gl = this.gl;
        if (this.blendMode === 1) {
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.ONE, gl.ONE);
        }
        else if (this.blendMode === 2) {
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.ONE, gl.ONE);
        }
        else {
            gl.disable(gl.BLEND);
        }
        if (this.doubleSided) {
            gl.disable(gl.CULL_FACE);
        }
        else {
            gl.enable(gl.CULL_FACE);
        }
        // Flags somewhere?
        // Per layer?
        gl.enable(gl.DEPTH_TEST);
        gl.depthMask(true);
    }
    bind(shader, textureOverrides) {
        const gl = this.gl;
        this.bindCommon();
        gl.uniform1f(shader.uniforms['u_specularity'], this.specularity);
        gl.uniform1f(shader.uniforms['u_specMult'], this.specMult);
        gl.uniform1f(shader.uniforms['u_emisMult'], this.emisMult);
        gl.uniform4f(shader.uniforms['u_lightAmbient'], 0.02, 0.02, 0.02, 0);
        const layers = this.layers;
        layers[0].bind(shader, textureOverrides);
        layers[1].bind(shader, textureOverrides);
        layers[2].bind(shader, textureOverrides);
        layers[4].bind(shader, textureOverrides);
        layers[5].bind(shader, textureOverrides);
        layers[10].bind(shader, textureOverrides);
        layers[12].bind(shader, textureOverrides);
    }
    unbind(shader) {
        const gl = this.gl;
        gl.disable(gl.BLEND);
        gl.enable(gl.CULL_FACE);
        const layers = this.layers;
        layers[0].unbind(shader);
        layers[1].unbind(shader);
        layers[2].unbind(shader);
        layers[4].unbind(shader);
        layers[5].unbind(shader);
        layers[10].unbind(shader);
        layers[12].unbind(shader);
    }
}
exports.M3StandardMaterial = M3StandardMaterial;
//# sourceMappingURL=standardmaterial.js.map