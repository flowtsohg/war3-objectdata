"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * M3 animation data validator.
 */
class M3Sts {
    constructor(sts) {
        this.animIds = new Map();
        const animIds = sts.animIds.get();
        // Allows direct checks instead of loops
        for (let i = 0, l = animIds.length; i < l; i++) {
            this.animIds.set(animIds[i], i);
        }
    }
    hasData(animRef) {
        return this.animIds.has(animRef.animId);
    }
}
exports.default = M3Sts;
//# sourceMappingURL=sts.js.map