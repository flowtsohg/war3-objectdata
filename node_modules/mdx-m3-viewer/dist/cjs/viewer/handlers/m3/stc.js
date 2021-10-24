"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sd_1 = require("./sd");
/**
 * M3 sequence data.
 */
class M3Stc {
    constructor(stc) {
        this.animRefs = [];
        this.sd = [];
        const animIds = stc.animIds.get();
        this.name = stc.name.get();
        this.runsConcurrent = stc.runsConcurrent;
        this.priority = stc.priority;
        this.stsIndex = stc.stsIndex;
        const uints = stc.animRefs.get();
        const animRefs = new Uint16Array(uints.buffer);
        // Allows direct checks instead of loops
        for (let i = 0, l = animIds.length; i < l; i++) {
            this.animRefs[animIds[i]] = [animRefs[i * 2 + 1], animRefs[i * 2]];
        }
        for (const sd of stc.sd) {
            const container = new sd_1.default();
            const sds = sd.get();
            if (sds) {
                container.addSds(sds);
            }
            this.sd.push(container);
        }
    }
    getValueUnsafe(animRef, instance) {
        const ref = this.animRefs[animRef.animId];
        if (ref) {
            return this.sd[ref[0]].getValueUnsafe(ref[1], animRef, instance.frame, this.runsConcurrent);
        }
        return animRef.initValue;
    }
}
exports.default = M3Stc;
//# sourceMappingURL=stc.js.map