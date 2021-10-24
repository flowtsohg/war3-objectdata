"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const agent_1 = require("./agent");
/**
 * type force
 */
class JassForce extends agent_1.default {
    constructor() {
        super(...arguments);
        this.players = new Set();
    }
}
exports.default = JassForce;
//# sourceMappingURL=force.js.map