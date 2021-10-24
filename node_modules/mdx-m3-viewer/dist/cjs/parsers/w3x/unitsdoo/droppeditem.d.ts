import BinaryStream from '../../../common/binarystream';
/**
 * A dropped item.
 */
export default class DroppedItem {
    id: string;
    chance: number;
    load(stream: BinaryStream): void;
    save(stream: BinaryStream): void;
}
