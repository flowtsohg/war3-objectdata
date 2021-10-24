"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binarystream_1 = require("../../../common/binarystream");
const triggercategory_1 = require("./triggercategory");
const variable_1 = require("./variable");
const trigger_1 = require("./trigger");
/**
 * war3map.wtg - the trigger file.
 */
class War3MapWtg {
    constructor() {
        this.version = 0;
        this.categories = [];
        this.u1 = 0;
        this.variables = [];
        this.triggers = [];
    }
    load(buffer, triggerData) {
        const stream = new binarystream_1.default(buffer);
        if (stream.readBinary(4) !== 'WTG!') {
            throw new Error('Not a WTG file');
        }
        this.version = stream.readInt32();
        for (let i = 0, l = stream.readUint32(); i < l; i++) {
            const category = new triggercategory_1.default();
            category.load(stream, this.version);
            this.categories[i] = category;
        }
        this.u1 = stream.readInt32();
        for (let i = 0, l = stream.readUint32(); i < l; i++) {
            const variable = new variable_1.default();
            variable.load(stream, this.version);
            this.variables[i] = variable;
        }
        for (let i = 0, l = stream.readUint32(); i < l; i++) {
            const trigger = new trigger_1.default();
            try {
                trigger.load(stream, this.version, triggerData);
            }
            catch (e) {
                throw new Error(`Trigger ${i}: ${e}`);
            }
            this.triggers[i] = trigger;
        }
    }
    save() {
        const stream = new binarystream_1.default(new ArrayBuffer(this.getByteLength()));
        stream.writeBinary('WTG!');
        stream.writeInt32(this.version);
        stream.writeUint32(this.categories.length);
        for (const category of this.categories) {
            category.save(stream, this.version);
        }
        stream.writeInt32(this.u1);
        stream.writeUint32(this.variables.length);
        for (const variable of this.variables) {
            variable.save(stream, this.version);
        }
        stream.writeUint32(this.triggers.length);
        for (const trigger of this.triggers) {
            trigger.save(stream, this.version);
        }
        return stream.uint8array;
    }
    getByteLength() {
        let size = 24;
        const version = this.version;
        for (const category of this.categories) {
            size += category.getByteLength(version);
        }
        for (const variable of this.variables) {
            size += variable.getByteLength(version);
        }
        for (const trigger of this.triggers) {
            size += trigger.getByteLength(version);
        }
        return size;
    }
}
exports.default = War3MapWtg;
//# sourceMappingURL=file.js.map