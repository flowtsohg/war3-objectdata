"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandlerResource = void 0;
const resource_1 = require("./resource");
/**
 * A viewer handler resource.
 *
 * Generally speaking handler resources are created via viewer.load().
 */
class HandlerResource extends resource_1.Resource {
    constructor(resourceData) {
        super(resourceData);
        this.pathSolver = resourceData.pathSolver;
    }
}
exports.HandlerResource = HandlerResource;
//# sourceMappingURL=handlerresource.js.map