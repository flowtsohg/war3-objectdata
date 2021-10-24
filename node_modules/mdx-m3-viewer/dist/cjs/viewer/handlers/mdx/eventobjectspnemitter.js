"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eventobjectemitter_1 = require("./eventobjectemitter");
const eventobjectspn_1 = require("./eventobjectspn");
/**
 * An MDX model emitter.
 */
class EventObjectSpnEmitter extends eventobjectemitter_1.default {
    createObject() {
        return new eventobjectspn_1.default(this);
    }
}
exports.default = EventObjectSpnEmitter;
//# sourceMappingURL=eventobjectspnemitter.js.map