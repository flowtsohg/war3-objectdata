"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genericobject_1 = require("./genericobject");
/**
 * An MDX particle emitter.
 */
class ParticleEmitterObject extends genericobject_1.default {
    constructor(model, emitter, index) {
        super(model, emitter, index);
        this.internalModel = null;
        this.ok = false;
        this.speed = emitter.speed;
        this.latitude = emitter.latitude;
        this.longitude = emitter.longitude;
        this.lifeSpan = emitter.lifeSpan;
        this.gravity = emitter.gravity;
        this.emissionRate = emitter.emissionRate;
        model.viewer.load(emitter.path.replace(/\\/g, '/').toLowerCase().replace('.mdl', '.mdx'), model.pathSolver, model.solverParams)
            .then((model) => {
            if (model) {
                this.internalModel = model;
                this.ok = true;
            }
        });
    }
    getSpeed(out, sequence, frame, counter) {
        return this.getScalarValue(out, 'KPES', sequence, frame, counter, this.speed);
    }
    getLatitude(out, sequence, frame, counter) {
        return this.getScalarValue(out, 'KPLTV', sequence, frame, counter, this.latitude);
    }
    getLongitude(out, sequence, frame, counter) {
        return this.getScalarValue(out, 'KPLN', sequence, frame, counter, this.longitude);
    }
    getLifeSpan(out, sequence, frame, counter) {
        return this.getScalarValue(out, 'KPEL', sequence, frame, counter, this.lifeSpan);
    }
    getGravity(out, sequence, frame, counter) {
        return this.getScalarValue(out, 'KPEG', sequence, frame, counter, this.gravity);
    }
    getEmissionRate(out, sequence, frame, counter) {
        return this.getScalarValue(out, 'KPEE', sequence, frame, counter, this.emissionRate);
    }
    getVisibility(out, sequence, frame, counter) {
        return this.getScalarValue(out, 'KPEV', sequence, frame, counter, 1);
    }
}
exports.default = ParticleEmitterObject;
//# sourceMappingURL=particleemitterobject.js.map