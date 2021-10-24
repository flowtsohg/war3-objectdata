"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = require("./image");
const isformat_1 = require("./isformat");
exports.default = {
    Image: image_1.DdsImage,
    FOURCC_DXT1: image_1.FOURCC_DXT1,
    FOURCC_DXT3: image_1.FOURCC_DXT3,
    FOURCC_DXT5: image_1.FOURCC_DXT5,
    FOURCC_ATI2: image_1.FOURCC_ATI2,
    isDds: isformat_1.default,
};
//# sourceMappingURL=index.js.map