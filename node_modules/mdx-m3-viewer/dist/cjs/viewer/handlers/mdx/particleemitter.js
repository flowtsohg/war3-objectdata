"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emitter_1 = require("./emitter");
const particle_1 = require("./particle");
const emissionRateHeap = new Float32Array(1);
/**
 * An MDX particle emitter.
 */
class ParticleEmitter extends emitter_1.default {
    updateEmission(dt) {
        const instance = this.instance;
        if (instance.allowParticleSpawn) {
            const emitterObject = this.emitterObject;
            emitterObject.getEmissionRate(emissionRateHeap, instance.sequence, instance.frame, instance.counter);
            this.currentEmission += emissionRateHeap[0] * dt;
        }
    }
    emit() {
        this.emitObject();
    }
    createObject() {
        return new particle_1.default(this);
    }
}
exports.default = ParticleEmitter;
//# sourceMappingURL=particleemitter.js.map