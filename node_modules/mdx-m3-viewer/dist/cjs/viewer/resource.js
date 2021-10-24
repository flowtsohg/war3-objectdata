"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = void 0;
/**
 * A viewer resource.
 *
 * Generally speaking resources are created via viewer.load(), or viewer.loadGeneric().
 */
class Resource {
    constructor(resourceData) {
        this.blockers = [];
        this.viewer = resourceData.viewer;
        this.fetchUrl = resourceData.fetchUrl;
    }
    /**
     * Remove this resource from its viewer's cache.
     *
     * Equivalent to viewer.unload(resource).
     */
    detach() {
        return this.viewer.unload(this);
    }
}
exports.Resource = Resource;
//# sourceMappingURL=resource.js.map