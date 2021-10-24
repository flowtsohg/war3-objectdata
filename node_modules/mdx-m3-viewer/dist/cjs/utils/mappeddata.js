"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MappedData = exports.MappedDataRow = void 0;
const file_1 = require("../parsers/slk/file");
const file_2 = require("../parsers/ini/file");
/**
 * A MappedData row.
 */
class MappedDataRow {
    constructor() {
        this.map = {};
    }
    set(key, value) {
        if (typeof value !== 'string') {
            value = value.toString();
        }
        this.map[key.toLowerCase()] = value;
    }
    string(key) {
        return this.map[key.toLowerCase()];
    }
    number(key) {
        const string = this.string(key);
        if (!string) {
            return 0;
        }
        return parseFloat(string);
    }
}
exports.MappedDataRow = MappedDataRow;
/**
 * A structure that holds mapped data from INI and SLK files.
 *
 * In the case of SLK files, the first row is expected to hold the names of the columns.
 */
class MappedData {
    constructor(buffer) {
        this.map = {};
        if (buffer) {
            this.load(buffer);
        }
    }
    /**
     * Load data from an SLK file or an INI file.
     *
     * Note that this may override previous properties!
     */
    load(buffer) {
        if (buffer.startsWith('ID;')) {
            const file = new file_1.default();
            file.load(buffer);
            const rows = file.rows;
            const header = rows[0];
            const map = this.map;
            for (let i = 1, l = rows.length; i < l; i++) {
                const row = rows[i];
                // DialogueDemonBase.slk has an empty row.
                if (row) {
                    const name = row[0];
                    // DialogueDemonBase.slk also has rows containing only a single underline.
                    if (name && name !== '_') {
                        if (!map[name]) {
                            map[name] = new MappedDataRow();
                        }
                        const mapped = map[name];
                        for (let j = 0, k = header.length; j < k; j++) {
                            let key = header[j];
                            // UnitBalance.slk doesn't define the name of one column.
                            if (key === undefined) {
                                key = `column${j}`;
                            }
                            mapped.map[key.toLowerCase()] = row[j];
                        }
                    }
                }
            }
        }
        else {
            const file = new file_2.IniFile();
            file.load(buffer);
            const sections = file.sections;
            const map = this.map;
            for (const [row, properties] of sections.entries()) {
                if (!map[row]) {
                    map[row] = new MappedDataRow();
                }
                const mapped = map[row];
                for (const [name, property] of properties) {
                    mapped.map[name.toLowerCase()] = property;
                }
            }
        }
    }
    getRow(key) {
        return this.map[key];
    }
    getProperty(key, name) {
        return this.map[key].map[name];
    }
    setRow(key, values) {
        this.map[key] = values;
    }
    findRow(key, expectedValue) {
        for (const row of Object.values(this.map)) {
            if (row.string(key) === expectedValue) {
                return row;
            }
        }
        return;
    }
}
exports.MappedData = MappedData;
//# sourceMappingURL=mappeddata.js.map