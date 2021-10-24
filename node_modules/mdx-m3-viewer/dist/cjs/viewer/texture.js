"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handlerresource_1 = require("./handlerresource");
/**
 * A texture.
 */
class Texture extends handlerresource_1.HandlerResource {
    constructor() {
        super(...arguments);
        this.webglResource = null;
        this.width = 0;
        this.height = 0;
    }
}
exports.default = Texture;
//# sourceMappingURL=texture.js.map