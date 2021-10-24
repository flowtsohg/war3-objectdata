"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binarystream_1 = require("../../../common/binarystream");
const file_1 = require("../w3u/file");
const file_2 = require("../w3d/file");
/**
 * war3map.w3o - the combined modification file.
 *
 * Contains all of the modifications of a map.
 * Can be exported and imported via the World Editor.
 */
class War3MapW3o {
    constructor() {
        this.version = 0;
        this.units = null;
        this.items = null;
        this.destructables = null;
        this.doodads = null;
        this.abilities = null;
        this.buffs = null;
        this.upgrades = null;
    }
    load(buffer) {
        const stream = new binarystream_1.default(buffer);
        this.version = stream.readInt32();
        if (stream.readInt32()) {
            this.units = new file_1.default();
            this.units.load(stream);
        }
        if (stream.readInt32()) {
            this.items = new file_1.default();
            this.items.load(stream);
        }
        if (stream.readInt32()) {
            this.destructables = new file_1.default();
            this.destructables.load(stream);
        }
        if (stream.readInt32()) {
            this.doodads = new file_2.default();
            this.doodads.load(stream);
        }
        if (stream.readInt32()) {
            this.abilities = new file_2.default();
            this.abilities.load(stream);
        }
        if (stream.readInt32()) {
            this.buffs = new file_1.default();
            this.buffs.load(stream);
        }
        if (stream.readInt32()) {
            this.upgrades = new file_2.default();
            this.upgrades.load(stream);
        }
    }
    save() {
        const stream = new binarystream_1.default(new ArrayBuffer(this.getByteLength()));
        stream.writeInt32(this.version);
        if (this.units) {
            stream.writeInt32(1);
            stream.writeUint8Array(this.units.save());
        }
        else {
            stream.writeInt32(0);
        }
        if (this.items) {
            stream.writeInt32(1);
            stream.writeUint8Array(this.items.save());
        }
        else {
            stream.writeInt32(0);
        }
        if (this.destructables) {
            stream.writeInt32(1);
            stream.writeUint8Array(this.destructables.save());
        }
        else {
            stream.writeInt32(0);
        }
        if (this.doodads) {
            stream.writeInt32(1);
            stream.writeUint8Array(this.doodads.save());
        }
        else {
            stream.writeInt32(0);
        }
        if (this.abilities) {
            stream.writeInt32(1);
            stream.writeUint8Array(this.abilities.save());
        }
        else {
            stream.writeInt32(0);
        }
        if (this.buffs) {
            stream.writeInt32(1);
            stream.writeUint8Array(this.buffs.save());
        }
        else {
            stream.writeInt32(0);
        }
        if (this.upgrades) {
            stream.writeInt32(1);
            stream.writeUint8Array(this.upgrades.save());
        }
        else {
            stream.writeInt32(0);
        }
        return stream.uint8array;
    }
    getByteLength() {
        let size = 32;
        if (this.units) {
            size += this.units.getByteLength();
        }
        if (this.items) {
            size += this.items.getByteLength();
        }
        if (this.destructables) {
            size += this.destructables.getByteLength();
        }
        if (this.doodads) {
            size += this.doodads.getByteLength();
        }
        if (this.abilities) {
            size += this.abilities.getByteLength();
        }
        if (this.buffs) {
            size += this.buffs.getByteLength();
        }
        if (this.upgrades) {
            size += this.upgrades.getByteLength();
        }
        return size;
    }
}
exports.default = War3MapW3o;
//# sourceMappingURL=file.js.map