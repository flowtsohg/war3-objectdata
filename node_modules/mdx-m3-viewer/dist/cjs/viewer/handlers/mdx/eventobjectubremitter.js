"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eventobjectemitter_1 = require("./eventobjectemitter");
const eventobjectsplubr_1 = require("./eventobjectsplubr");
/**
 * An MDX ubersplat emitter.
 */
class EventObjectUbrEmitter extends eventobjectemitter_1.default {
    createObject() {
        return new eventobjectsplubr_1.default(this);
    }
}
exports.default = EventObjectUbrEmitter;
//# sourceMappingURL=eventobjectubremitter.js.map