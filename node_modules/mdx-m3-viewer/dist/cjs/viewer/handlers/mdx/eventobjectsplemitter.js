"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eventobjectemitter_1 = require("./eventobjectemitter");
const eventobjectsplubr_1 = require("./eventobjectsplubr");
/**
 * An MDX splat emitter.
 */
class EventObjectSplEmitter extends eventobjectemitter_1.default {
    createObject() {
        return new eventobjectsplubr_1.default(this);
    }
}
exports.default = EventObjectSplEmitter;
//# sourceMappingURL=eventobjectsplemitter.js.map