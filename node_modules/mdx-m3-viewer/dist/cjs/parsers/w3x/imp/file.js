"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binarystream_1 = require("../../../common/binarystream");
const import_1 = require("./import");
/**
 * war3map.imp - the import file.
 */
class War3MapImp {
    constructor() {
        this.version = 1;
        this.entries = new Map();
    }
    load(buffer) {
        const stream = new binarystream_1.default(buffer);
        this.version = stream.readUint32();
        for (let i = 0, l = stream.readUint32(); i < l; i++) {
            const entry = new import_1.default();
            entry.load(stream);
            if (entry.isCustom) {
                this.entries.set(entry.path, entry);
            }
            else {
                this.entries.set(`war3mapimported\\${entry.path}`, entry);
            }
        }
    }
    save() {
        const stream = new binarystream_1.default(new ArrayBuffer(this.getByteLength()));
        stream.writeUint32(this.version);
        stream.writeUint32(this.entries.size);
        for (const entry of this.entries.values()) {
            entry.save(stream);
        }
        return stream.uint8array;
    }
    getByteLength() {
        let size = 8;
        for (const entry of this.entries.values()) {
            size += entry.getByteLength();
        }
        return size;
    }
    set(path) {
        if (!this.entries.has(path)) {
            const entry = new import_1.default();
            entry.isCustom = 10;
            entry.path = path;
            this.entries.set(path, entry);
            return true;
        }
        return false;
    }
    has(path) {
        return this.entries.has(path);
    }
    delete(path) {
        return this.entries.delete(path);
    }
    rename(path, newPath) {
        const entry = this.entries.get(path);
        if (entry) {
            entry.isCustom = 10;
            entry.path = newPath;
            return true;
        }
        return false;
    }
}
exports.default = War3MapImp;
//# sourceMappingURL=file.js.map