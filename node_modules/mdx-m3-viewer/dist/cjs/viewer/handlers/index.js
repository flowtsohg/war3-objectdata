"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handler_1 = require("./blp/handler");
const handler_2 = require("./dds/handler");
const handler_3 = require("./m3/handler");
const handler_4 = require("./mdx/handler");
const handler_5 = require("./tga/handler");
const viewer_1 = require("./w3x/viewer");
exports.default = {
    blp: handler_1.default,
    dds: handler_2.default,
    m3: handler_3.default,
    mdx: handler_4.default,
    tga: handler_5.default,
    War3MapViewer: viewer_1.default,
};
//# sourceMappingURL=index.js.map