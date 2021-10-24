"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const block_1 = require("./block");
const constants_1 = require("./constants");
/**
 * A block table.
 */
class BlockTable {
    constructor(c) {
        this.c = c;
        this.entries = [];
    }
    add(buffer) {
        const block = new block_1.default();
        block.normalSize = buffer.byteLength;
        this.entries.push(block);
        return block;
    }
    clear() {
        this.entries.length = 0;
    }
    addEmpties(howMany) {
        for (let i = 0; i < howMany; i++) {
            this.entries.push(new block_1.default());
        }
    }
    load(bytes) {
        const entriesCount = bytes.byteLength / 16;
        const uint32array = new Uint32Array(this.c.decryptBlock(bytes, constants_1.BLOCK_TABLE_KEY).buffer);
        let offset = 0;
        // Clear the table and add the needed empties.
        this.clear();
        this.addEmpties(entriesCount);
        for (const block of this.entries) {
            block.load(uint32array.subarray(offset, offset + 4));
            offset += 4;
        }
    }
    save(bytes) {
        const uint32array = new Uint32Array(this.entries.length * 4);
        let offset = 0;
        for (const block of this.entries) {
            block.save(uint32array.subarray(offset, offset + 4));
            offset += 4;
        }
        const uint8array = new Uint8Array(uint32array.buffer);
        this.c.encryptBlock(uint8array, constants_1.BLOCK_TABLE_KEY);
        bytes.set(uint8array);
    }
}
exports.default = BlockTable;
//# sourceMappingURL=blocktable.js.map