"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * war3map.shd - the shadow file.
 */
class War3MapShd {
    constructor() {
        this.shadows = new Uint8Array(0);
    }
    load(buffer, width, height) {
        this.shadows = new Uint8Array(buffer.slice(0, width * height * 16));
    }
    save() {
        return this.shadows.slice();
    }
    getByteLength() {
        return this.shadows.length;
    }
}
exports.default = War3MapShd;
//# sourceMappingURL=file.js.map