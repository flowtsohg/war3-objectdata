"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emitter_1 = require("../../emitter");
/**
 * The base of all MDX emitters.
 */
class MdxEmitter extends emitter_1.default {
    constructor(instance, emitterObject) {
        super(instance);
        this.emitterObject = emitterObject;
    }
    update(dt) {
        if (this.emitterObject.ok) {
            super.update(dt);
        }
    }
}
exports.default = MdxEmitter;
//# sourceMappingURL=emitter.js.map