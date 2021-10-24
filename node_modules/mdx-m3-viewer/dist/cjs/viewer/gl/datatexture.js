"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A data texture.
 */
class DataTexture {
    constructor(gl, channels = 4, width = 1, height = 1) {
        this.width = 0;
        this.height = 0;
        this.gl = gl;
        this.texture = gl.createTexture();
        this.format = (channels === 3 ? gl.RGB : gl.RGBA);
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        this.reserve(width, height);
    }
    reserve(width, height) {
        if (this.width < width || this.height < height) {
            const gl = this.gl;
            this.width = Math.max(this.width, width);
            this.height = Math.max(this.height, height);
            gl.bindTexture(gl.TEXTURE_2D, this.texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, this.format, this.width, this.height, 0, this.format, gl.FLOAT, null);
        }
    }
    bindAndUpdate(buffer, width = this.width, height = this.height) {
        const gl = this.gl;
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, width, height, this.format, gl.FLOAT, buffer);
    }
    bind(unit) {
        const gl = this.gl;
        gl.activeTexture(gl.TEXTURE0 + unit);
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
    }
}
exports.default = DataTexture;
//# sourceMappingURL=datatexture.js.map