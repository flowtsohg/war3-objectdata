"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A wrapper around a WebGL shader program.
 */
class Shader {
    constructor(webgl, program) {
        this.uniforms = {};
        this.attribs = {};
        this.attribsCount = 0;
        this.webgl = webgl;
        this.program = program;
        const gl = webgl.gl;
        for (let i = 0, l = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS); i < l; i++) {
            const object = gl.getActiveUniform(program, i);
            if (object) {
                if (object.size === 1) {
                    this.uniforms[object.name] = gl.getUniformLocation(program, object.name);
                }
                else {
                    const base = object.name.substr(0, object.name.length - 3);
                    for (let index = 0; index < object.size; index++) {
                        const name = base + '[' + index + ']';
                        this.uniforms[name] = gl.getUniformLocation(program, name);
                    }
                }
            }
        }
        for (let i = 0, l = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES); i < l; i++) {
            const object = gl.getActiveAttrib(program, i);
            if (object) {
                this.attribsCount += object.size;
                if (object.size === 1) {
                    this.attribs[object.name] = gl.getAttribLocation(program, object.name);
                }
                else {
                    const base = object.name.substr(0, object.name.length - 3);
                    for (let index = 0; index < object.size; index++) {
                        const name = base + '[' + index + ']';
                        this.attribs[name] = gl.getAttribLocation(program, name);
                    }
                }
            }
        }
    }
    use() {
        this.webgl.useShader(this);
    }
}
exports.default = Shader;
//# sourceMappingURL=shader.js.map