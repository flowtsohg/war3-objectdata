"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("./resource");
/**
 * A generic resource.
 */
class GenericResource extends resource_1.Resource {
    constructor(data, resourceData) {
        super(resourceData);
        this.data = null;
        this.data = data;
    }
}
exports.default = GenericResource;
//# sourceMappingURL=genericresource.js.map