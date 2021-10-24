"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An unsupported entry.
 *
 * This is used for entries that have known structures (or at least sizes), but this parser isn't going to actually parse.
 * The entry will contain its own reader and version, in case the client code wants to do anything with it.
 */
class UnsupportedEntry {
    constructor(stream, version, index) {
        this.stream = stream;
        this.version = version;
        this.index = index;
    }
}
exports.default = UnsupportedEntry;
//# sourceMappingURL=unsupportedentry.js.map