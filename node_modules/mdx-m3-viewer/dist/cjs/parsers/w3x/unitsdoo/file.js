"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binarystream_1 = require("../../../common/binarystream");
const unit_1 = require("./unit");
/**
 * war3mapUnits.doo - the units and items file.
 */
class War3MapUnitsDoo {
    constructor() {
        this.version = 8;
        this.subversion = 11;
        this.units = [];
    }
    load(buffer, buildVersion) {
        const stream = new binarystream_1.default(buffer);
        if (stream.readBinary(4) !== 'W3do') {
            throw new Error('Not a valid war3mapUnits.doo buffer');
        }
        this.version = stream.readInt32();
        this.subversion = stream.readUint32();
        for (let i = 0, l = stream.readInt32(); i < l; i++) {
            const unit = new unit_1.default();
            unit.load(stream, this.version, this.subversion, buildVersion);
            this.units[i] = unit;
        }
    }
    save(buildVersion) {
        const stream = new binarystream_1.default(new ArrayBuffer(this.getByteLength(buildVersion)));
        stream.writeBinary('W3do');
        stream.writeInt32(this.version);
        stream.writeUint32(this.subversion);
        stream.writeInt32(this.units.length);
        for (const unit of this.units) {
            unit.save(stream, this.version, this.subversion, buildVersion);
        }
        return stream.uint8array;
    }
    getByteLength(buildVersion) {
        let size = 16;
        for (const unit of this.units) {
            size += unit.getByteLength(this.version, this.subversion, buildVersion);
        }
        return size;
    }
}
exports.default = War3MapUnitsDoo;
//# sourceMappingURL=file.js.map