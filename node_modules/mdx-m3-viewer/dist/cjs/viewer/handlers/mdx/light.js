"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genericobject_1 = require("./genericobject");
/**
 * An MDX light.
 */
class Light extends genericobject_1.default {
    constructor(model, light, index) {
        super(model, light, index);
        this.type = light.type;
        this.attenuation = light.attenuation;
        this.color = light.color;
        this.intensity = light.intensity;
        this.ambientColor = light.ambientColor;
        this.ambientIntensity = light.ambientIntensity;
    }
    getAttenuationStart(out, sequence, frame, counter) {
        return this.getScalarValue(out, 'KLAS', sequence, frame, counter, this.attenuation[0]);
    }
    getAttenuationEnd(out, sequence, frame, counter) {
        return this.getScalarValue(out, 'KLAE', sequence, frame, counter, this.attenuation[1]);
    }
    getIntensity(out, sequence, frame, counter) {
        return this.getScalarValue(out, 'KLAI', sequence, frame, counter, this.intensity);
    }
    getColor(out, sequence, frame, counter) {
        return this.getVectorValue(out, 'KLAC', sequence, frame, counter, this.color);
    }
    getAmbientIntensity(out, sequence, frame, counter) {
        return this.getScalarValue(out, 'KLBI', sequence, frame, counter, this.ambientIntensity);
    }
    getAmbientColor(out, sequence, frame, counter) {
        return this.getVectorValue(out, 'KLBC', sequence, frame, counter, this.ambientColor);
    }
}
exports.default = Light;
//# sourceMappingURL=light.js.map