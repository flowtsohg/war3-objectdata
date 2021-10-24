"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reference_1 = require("./reference");
const animationreference_1 = require("./animationreference");
/**
 * A camera.
 */
class Camera {
    constructor() {
        this.version = -1;
        this.bone = -1;
        this.name = new reference_1.default();
        this.fieldOfView = new animationreference_1.Float32AnimationReference();
        this.unknown0 = 0;
        this.farClip = new animationreference_1.Float32AnimationReference();
        this.nearClip = new animationreference_1.Float32AnimationReference();
        this.clip2 = new animationreference_1.Float32AnimationReference();
        this.focalDepth = new animationreference_1.Float32AnimationReference();
        this.falloffStart = new animationreference_1.Float32AnimationReference();
        this.falloffEnd = new animationreference_1.Float32AnimationReference();
        this.depthOfField = new animationreference_1.Float32AnimationReference();
    }
    load(stream, version, index) {
        this.version = version;
        this.bone = stream.readUint32();
        this.name.load(stream, index);
        this.fieldOfView.load(stream);
        this.unknown0 = stream.readUint32();
        this.farClip.load(stream);
        this.nearClip.load(stream);
        this.clip2.load(stream);
        this.focalDepth.load(stream);
        this.falloffStart.load(stream);
        this.falloffEnd.load(stream);
        this.depthOfField.load(stream);
    }
}
exports.default = Camera;
//# sourceMappingURL=camera.js.map