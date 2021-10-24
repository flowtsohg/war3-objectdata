"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Used by all fragment shaders.
const shader = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
`;
exports.default = shader;
//# sourceMappingURL=precision.glsl.js.map