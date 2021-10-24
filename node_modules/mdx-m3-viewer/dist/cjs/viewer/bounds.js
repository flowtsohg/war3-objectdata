"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An object representing both a sphere and an AABB, which is used for culling of all instances.
 *
 * By default, the size of the bounds is 0, and thus point-culling is done.
 */
class Bounds {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.r = 0;
    }
    fromExtents(min, max) {
        const x = min[0];
        const y = min[1];
        const z = min[2];
        const w = max[0] - x;
        const d = max[1] - y;
        const h = max[2] - z;
        this.x = x + w / 2;
        this.y = y + d / 2;
        this.z = z + h / 2;
        // Ensure the radius is actually 0 or bigger.
        // Some models apparently have reversed extents, go figure.
        this.r = Math.max(0, Math.max(w, d, h) / 2);
    }
}
exports.default = Bounds;
//# sourceMappingURL=bounds.js.map