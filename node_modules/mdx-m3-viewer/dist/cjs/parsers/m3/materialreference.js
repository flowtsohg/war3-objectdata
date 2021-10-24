"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A material reference.
 */
class MaterialReference {
    constructor() {
        this.version = -1;
        this.materialType = 0;
        this.materialIndex = -1;
    }
    load(stream, version, _index) {
        this.version = version;
        this.materialType = stream.readUint32();
        this.materialIndex = stream.readUint32();
    }
}
exports.default = MaterialReference;
//# sourceMappingURL=materialreference.js.map