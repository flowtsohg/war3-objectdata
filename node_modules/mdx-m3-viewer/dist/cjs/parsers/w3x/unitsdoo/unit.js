"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const droppeditemset_1 = require("./droppeditemset");
const inventoryitem_1 = require("./inventoryitem");
const modifiedability_1 = require("./modifiedability");
const randomunit_1 = require("./randomunit");
/**
 * A unit.
 */
class Unit {
    constructor() {
        this.id = '\0\0\0\0';
        this.variation = 0;
        this.location = new Float32Array(3);
        this.angle = 0;
        this.scale = new Float32Array([1, 1, 1]);
        /**
         * @since Game version 1.32
         */
        this.skin = '\0\0\0\0';
        this.flags = 0;
        this.player = 0;
        this.unknown = 0;
        this.hitpoints = -1;
        this.mana = -1;
        /**
         * @since 8
         */
        this.droppedItemTable = 0;
        this.droppedItemSets = [];
        this.goldAmount = 0;
        this.targetAcquisition = 0;
        this.heroLevel = 0;
        /**
         * @since 8
         */
        this.heroStrength = 0;
        /**
         * @since 8
         */
        this.heroAgility = 0;
        /**
         * @since 8
         */
        this.heroIntelligence = 0;
        this.itemsInInventory = [];
        this.modifiedAbilities = [];
        this.randomFlag = 0;
        this.level = new Uint8Array(3);
        this.itemClass = 0;
        this.unitGroup = 0;
        this.positionInGroup = 0;
        this.randomUnitTables = [];
        this.customTeamColor = 0;
        this.waygate = 0;
        this.creationNumber = 0;
    }
    load(stream, version, subversion, buildVersion) {
        this.id = stream.readBinary(4);
        this.variation = stream.readInt32();
        stream.readFloat32Array(this.location);
        this.angle = stream.readFloat32();
        stream.readFloat32Array(this.scale);
        if (buildVersion > 131) {
            this.skin = stream.readBinary(4);
        }
        this.flags = stream.readUint8();
        this.player = stream.readInt32();
        this.unknown = stream.readUint16();
        this.hitpoints = stream.readInt32();
        this.mana = stream.readInt32();
        if (subversion > 10) {
            this.droppedItemTable = stream.readInt32();
        }
        for (let i = 0, l = stream.readInt32(); i < l; i++) {
            const set = new droppeditemset_1.default();
            set.load(stream);
            this.droppedItemSets[i] = set;
        }
        this.goldAmount = stream.readInt32();
        this.targetAcquisition = stream.readFloat32();
        this.heroLevel = stream.readInt32();
        if (subversion > 10) {
            this.heroStrength = stream.readInt32();
            this.heroAgility = stream.readInt32();
            this.heroIntelligence = stream.readInt32();
        }
        for (let i = 0, l = stream.readInt32(); i < l; i++) {
            const item = new inventoryitem_1.default();
            item.load(stream);
            this.itemsInInventory[i] = item;
        }
        for (let i = 0, l = stream.readInt32(); i < l; i++) {
            const modifiedAbility = new modifiedability_1.default();
            modifiedAbility.load(stream);
            this.modifiedAbilities[i] = modifiedAbility;
        }
        this.randomFlag = stream.readInt32();
        if (this.randomFlag === 0) {
            stream.readUint8Array(this.level); // 24bit number
            this.itemClass = stream.readUint8();
        }
        else if (this.randomFlag === 1) {
            this.unitGroup = stream.readUint32();
            this.positionInGroup = stream.readUint32();
        }
        else if (this.randomFlag === 2) {
            for (let i = 0, l = stream.readInt32(); i < l; i++) {
                const randomUnit = new randomunit_1.default();
                randomUnit.load(stream);
                this.randomUnitTables[i] = randomUnit;
            }
        }
        this.customTeamColor = stream.readInt32();
        this.waygate = stream.readInt32();
        this.creationNumber = stream.readInt32();
    }
    save(stream, version, subversion, buildVersion) {
        stream.writeBinary(this.id);
        stream.writeInt32(this.variation);
        stream.writeFloat32Array(this.location);
        stream.writeFloat32(this.angle);
        stream.writeFloat32Array(this.scale);
        if (buildVersion > 131) {
            stream.writeBinary(this.skin);
        }
        stream.writeUint8(this.flags);
        stream.writeInt32(this.player);
        stream.writeUint16(this.unknown);
        stream.writeInt32(this.hitpoints);
        stream.writeInt32(this.mana);
        if (subversion > 10) {
            stream.writeInt32(this.droppedItemTable);
        }
        stream.writeInt32(this.droppedItemSets.length);
        for (const droppedItemSet of this.droppedItemSets) {
            droppedItemSet.save(stream);
        }
        stream.writeInt32(this.goldAmount);
        stream.writeFloat32(this.targetAcquisition);
        stream.writeInt32(this.heroLevel);
        if (subversion > 10) {
            stream.writeInt32(this.heroStrength);
            stream.writeInt32(this.heroAgility);
            stream.writeInt32(this.heroIntelligence);
        }
        stream.writeInt32(this.itemsInInventory.length);
        for (const itemInInventory of this.itemsInInventory) {
            itemInInventory.save(stream);
        }
        stream.writeInt32(this.modifiedAbilities.length);
        for (const modifiedAbility of this.modifiedAbilities) {
            modifiedAbility.save(stream);
        }
        stream.writeInt32(this.randomFlag);
        if (this.randomFlag === 0) {
            stream.writeUint8Array(this.level);
            stream.writeUint8(this.itemClass);
        }
        else if (this.randomFlag === 1) {
            stream.writeUint32(this.unitGroup);
            stream.writeUint32(this.positionInGroup);
        }
        else if (this.randomFlag === 2) {
            stream.writeInt32(this.randomUnitTables.length);
            for (const randomUnitTable of this.randomUnitTables) {
                randomUnitTable.save(stream);
            }
        }
        stream.writeInt32(this.customTeamColor);
        stream.writeInt32(this.waygate);
        stream.writeInt32(this.creationNumber);
    }
    getByteLength(version, subversion, buildVersion) {
        let size = 91;
        if (buildVersion > 131) {
            size += 4;
        }
        if (subversion > 10) {
            size += 16;
        }
        for (const droppedItemSet of this.droppedItemSets) {
            size += droppedItemSet.getByteLength();
        }
        size += this.itemsInInventory.length * 8;
        size += this.modifiedAbilities.length * 12;
        if (this.randomFlag === 0) {
            size += 4;
        }
        else if (this.randomFlag === 1) {
            size += 8;
        }
        else if (this.randomFlag === 2) {
            size += 4 + this.randomUnitTables.length * 8;
        }
        return size;
    }
}
exports.default = Unit;
//# sourceMappingURL=unit.js.map