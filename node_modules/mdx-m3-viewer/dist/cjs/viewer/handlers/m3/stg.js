"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * M3 animation data getter.
 */
class M3Stg {
    constructor(stg, sts, stc) {
        this.name = stg.name.get();
        this.stcIndices = stg.stcIndices.get();
        this.sts = sts;
        this.stc = stc;
    }
    getValueUnsafe(animRef, instance) {
        const stcIndices = this.stcIndices;
        const stcs = this.stc;
        const stss = this.sts;
        for (let i = 0, l = stcIndices.length; i < l; i++) {
            const stc = stcs[stcIndices[i]];
            const sts = stss[stc.stsIndex];
            // First check if this STC actually has data for this animation reference
            if (sts.hasData(animRef)) {
                // Since this STC has data for this animation reference, return it
                return stc.getValueUnsafe(animRef, instance);
            }
        }
        // No STC referenced by the STG had data for this animation reference
        return animRef.initValue;
    }
}
exports.default = M3Stg;
//# sourceMappingURL=stg.js.map