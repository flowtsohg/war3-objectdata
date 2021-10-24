"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eventobjectemitter_1 = require("./eventobjectemitter");
const eventobjectsnd_1 = require("./eventobjectsnd");
/**
 * An MDX sound emitter.
 */
class EventObjectSndEmitter extends eventobjectemitter_1.default {
    createObject() {
        return new eventobjectsnd_1.default(this);
    }
}
exports.default = EventObjectSndEmitter;
//# sourceMappingURL=eventobjectsndemitter.js.map