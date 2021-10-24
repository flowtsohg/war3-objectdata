"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A bounding sphere.
 */
class BoundingSphere {
    constructor() {
        this.min = new Float32Array(3);
        this.max = new Float32Array(3);
        this.radius = 0;
    }
    load(stream) {
        stream.readFloat32Array(this.min);
        stream.readFloat32Array(this.max);
        this.radius = stream.readFloat32();
    }
}
exports.default = BoundingSphere;
//# sourceMappingURL=boundingsphere.js.map