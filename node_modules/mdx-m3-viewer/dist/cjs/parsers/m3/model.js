"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binarystream_1 = require("../../common/binarystream");
const indexentry_1 = require("./indexentry");
const md34_1 = require("./md34");
/**
 * A model.
 */
class Model {
    constructor() {
        this.index = [];
        this.model = null;
    }
    load(src) {
        const stream = new binarystream_1.default(src);
        const header = new md34_1.default();
        header.load(stream, 11, this.index);
        if (header.tag !== 'MD34') {
            throw new Error('WrongMagicNumber');
        }
        stream.seek(header.offset);
        // Read the index entries
        for (let i = 0, l = header.entries; i < l; i++) {
            this.index[i] = new indexentry_1.default(stream, this.index);
        }
        const modelEntries = this.index[header.model.id].entries;
        if (modelEntries) {
            this.model = modelEntries[0];
        }
    }
}
exports.default = Model;
//# sourceMappingURL=model.js.map