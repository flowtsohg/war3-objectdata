import BinaryStream from '../../../common/binarystream';
/**
 * An inventory item.
 */
export default class InventoryItem {
    slot: number;
    id: string;
    load(stream: BinaryStream): void;
    save(stream: BinaryStream): void;
}
