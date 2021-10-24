"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emitter_1 = require("./emitter");
const valueHeap = new Uint32Array(1);
/**
 * The abstract base MDX event object emitter.
 */
class EventObjectEmitter extends emitter_1.default {
    constructor() {
        super(...arguments);
        this.lastValue = 0;
    }
    updateEmission(_dt) {
        const instance = this.instance;
        if (instance.allowParticleSpawn) {
            const emitterObject = this.emitterObject;
            emitterObject.getValue(valueHeap, instance);
            const value = valueHeap[0];
            if (value === 1 && value !== this.lastValue) {
                this.currentEmission += 1;
            }
            this.lastValue = value;
        }
    }
    emit() {
        this.emitObject();
    }
}
exports.default = EventObjectEmitter;
//# sourceMappingURL=eventobjectemitter.js.map