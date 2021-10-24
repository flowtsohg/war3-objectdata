"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An M3 camera.
 */
class M3Camera {
    constructor(camera) {
        this.bone = camera.bone;
        this.name = camera.name.get();
        // / TODO: Add animated getters, much like the Mdx structures.
        /*
        this.fieldOfView = new AnimationReference(reader, readFloat32);
        this.farClip = new AnimationReference(reader, readFloat32);
        this.nearClip = new AnimationReference(reader, readFloat32);
        this.clip2 = new AnimationReference(reader, readFloat32);
        this.focalDepth = new AnimationReference(reader, readFloat32);
        this.falloffStart = new AnimationReference(reader, readFloat32);
        this.falloffEnd = new AnimationReference(reader, readFloat32);
        this.depthOfField = new AnimationReference(reader, readFloat32);
        */
    }
}
exports.default = M3Camera;
//# sourceMappingURL=camera.js.map