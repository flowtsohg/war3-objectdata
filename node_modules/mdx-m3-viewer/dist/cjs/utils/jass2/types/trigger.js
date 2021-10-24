"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const agent_1 = require("./agent");
/**
 * type trigger
 */
class JassTrigger extends agent_1.default {
    constructor() {
        super(...arguments);
        this.events = [];
        this.conditions = [];
        this.actions = [];
        this.enabled = true;
    }
}
exports.default = JassTrigger;
//# sourceMappingURL=trigger.js.map