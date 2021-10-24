import BinaryStream from '../../../common/binarystream';
import DroppedItemSet from './droppeditemset';
import InventoryItem from './inventoryitem';
import ModifiedAbility from './modifiedability';
import RandomUnit from './randomunit';
/**
 * A unit.
 */
export default class Unit {
    id: string;
    variation: number;
    location: Float32Array;
    angle: number;
    scale: Float32Array;
    /**
     * @since Game version 1.32
     */
    skin: string;
    flags: number;
    player: number;
    unknown: number;
    hitpoints: number;
    mana: number;
    /**
     * @since 8
     */
    droppedItemTable: number;
    droppedItemSets: DroppedItemSet[];
    goldAmount: number;
    targetAcquisition: number;
    heroLevel: number;
    /**
     * @since 8
     */
    heroStrength: number;
    /**
     * @since 8
     */
    heroAgility: number;
    /**
     * @since 8
     */
    heroIntelligence: number;
    itemsInInventory: InventoryItem[];
    modifiedAbilities: ModifiedAbility[];
    randomFlag: number;
    level: Uint8Array;
    itemClass: number;
    unitGroup: number;
    positionInGroup: number;
    randomUnitTables: RandomUnit[];
    customTeamColor: number;
    waygate: number;
    creationNumber: number;
    load(stream: BinaryStream, version: number, subversion: number, buildVersion: number): void;
    save(stream: BinaryStream, version: number, subversion: number, buildVersion: number): void;
    getByteLength(version: number, subversion: number, buildVersion: number): number;
}
