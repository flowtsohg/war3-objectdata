"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const agent_1 = require("./agent");
/**
 * type timer
 */
class JassTimer extends agent_1.default {
    constructor() {
        super(...arguments);
        this.elapsed = 0;
        this.timeout = 0;
        this.periodic = false;
        this.handlerFunc = -1;
    }
}
exports.default = JassTimer;
//# sourceMappingURL=timer.js.map