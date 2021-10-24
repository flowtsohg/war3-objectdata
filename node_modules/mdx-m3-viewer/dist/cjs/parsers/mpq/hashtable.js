"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hash_1 = require("./hash");
const constants_1 = require("./constants");
/**
 * A MPQ hash table.
 */
class MpqHashTable {
    constructor(c) {
        this.c = c;
        this.entries = [];
        // Minimum size
        this.addEmpties(4);
    }
    clear() {
        this.entries.length = 0;
    }
    addEmpties(howMany) {
        for (let i = 0; i < howMany; i++) {
            this.entries.push(new hash_1.default());
        }
    }
    getInsertionIndex(name) {
        const entries = this.entries;
        const offset = this.c.hash(name, constants_1.HASH_TABLE_INDEX) & (entries.length - 1);
        for (let i = 0, l = entries.length; i < l; i++) {
            const index = (i + offset) % l;
            const hash = entries[index];
            if (hash.platform === 0xFFFF) {
                return index;
            }
        }
        return -1;
    }
    add(name, blockIndex) {
        const insertionIndex = this.getInsertionIndex(name);
        if (insertionIndex !== -1) {
            const hash = this.entries[insertionIndex];
            hash.nameA = this.c.hash(name, constants_1.HASH_NAME_A);
            hash.nameB = this.c.hash(name, constants_1.HASH_NAME_B);
            hash.locale = 0;
            hash.platform = 0;
            hash.blockIndex = blockIndex;
            return hash;
        }
        return;
    }
    load(bytes) {
        const entriesCount = bytes.byteLength / 16;
        const uint32array = new Uint32Array(this.c.decryptBlock(bytes, constants_1.HASH_TABLE_KEY).buffer);
        let offset = 0;
        // Clear the table and add the needed empties.
        this.clear();
        this.addEmpties(entriesCount);
        for (const hash of this.entries) {
            hash.load(uint32array.subarray(offset, offset + 4));
            offset += 4;
        }
    }
    save(bytes) {
        const uint32array = new Uint32Array(this.entries.length * 4);
        let offset = 0;
        for (const hash of this.entries) {
            hash.save(uint32array.subarray(offset, offset + 4));
            offset += 4;
        }
        const uint8array = new Uint8Array(uint32array.buffer);
        this.c.encryptBlock(uint8array, constants_1.HASH_TABLE_KEY);
        bytes.set(uint8array);
    }
    get(name) {
        const c = this.c;
        const entries = this.entries;
        const offset = c.hash(name, constants_1.HASH_TABLE_INDEX) & (entries.length - 1);
        const nameA = c.hash(name, constants_1.HASH_NAME_A);
        const nameB = c.hash(name, constants_1.HASH_NAME_B);
        for (let i = 0, l = entries.length; i < l; i++) {
            const hash = entries[(i + offset) % l];
            if (nameA === hash.nameA && nameB === hash.nameB) {
                return hash;
            }
            else if (hash.blockIndex === 0xFFFFFFFF) {
                return null;
            }
        }
        return null;
    }
}
exports.default = MpqHashTable;
//# sourceMappingURL=hashtable.js.map