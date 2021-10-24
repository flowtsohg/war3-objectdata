"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const precision_glsl_1 = require("../../shaders/precision.glsl");
const shader = `
${precision_glsl_1.default}

uniform sampler2D u_waterTexture;

varying vec2 v_uv;
varying vec4 v_color;

void main() {
  gl_FragColor = texture2D(u_waterTexture, v_uv) * v_color;
}
`;
exports.default = shader;
//# sourceMappingURL=water.frag.js.map