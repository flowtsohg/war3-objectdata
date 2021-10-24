"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handlerresource_1 = require("./handlerresource");
const bounds_1 = require("./bounds");
/**
 * A model.
 */
class Model extends handlerresource_1.HandlerResource {
    constructor() {
        super(...arguments);
        this.bounds = new bounds_1.default();
    }
}
exports.default = Model;
//# sourceMappingURL=model.js.map