"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gl_1 = require("./gl");
const shader_1 = require("./shader");
const clientbuffer_1 = require("./clientbuffer");
const datatexture_1 = require("./datatexture");
const clientdatatexture_1 = require("./clientdatatexture");
exports.default = {
    WebGL: gl_1.default,
    Shader: shader_1.default,
    ClientBuffer: clientbuffer_1.default,
    DataTexture: datatexture_1.default,
    ClientDataTexture: clientdatatexture_1.default,
};
//# sourceMappingURL=index.js.map