"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emittedobject_1 = require("../../emittedobject");
/**
 * An MDX spawned sound object.
 */
class EventObjectSnd extends emittedobject_1.default {
    bind() {
        const emitter = this.emitter;
        const instance = emitter.instance;
        const viewer = instance.model.viewer;
        const scene = instance.scene;
        // Is audio enabled both viewer-wide and in this scene?
        if (viewer.audioEnabled && scene.audioEnabled) {
            const emitterObject = emitter.emitterObject;
            const node = instance.nodes[emitterObject.index];
            const audioContext = scene.audioContext;
            const decodedBuffers = emitterObject.decodedBuffers;
            const panner = audioContext.createPanner();
            const source = audioContext.createBufferSource();
            const location = node.worldLocation;
            // Panner settings.
            panner.positionX.value = location[0];
            panner.positionY.value = location[1];
            panner.positionZ.value = location[2];
            panner.maxDistance = emitterObject.distanceCutoff;
            panner.refDistance = emitterObject.minDistance;
            panner.connect(audioContext.destination);
            // Source.
            source.buffer = decodedBuffers[(Math.random() * decodedBuffers.length) | 0];
            source.connect(panner);
            // Make a sound.
            source.start(0);
        }
    }
    update(_dt) {
    }
}
exports.default = EventObjectSnd;
//# sourceMappingURL=eventobjectsnd.js.map