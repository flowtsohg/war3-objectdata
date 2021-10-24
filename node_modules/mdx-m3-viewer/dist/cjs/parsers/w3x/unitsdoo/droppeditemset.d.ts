import BinaryStream from '../../../common/binarystream';
import DroppedItem from './droppeditem';
/**
 * A dropped item set.
 */
export default class DroppedItemSet {
    items: DroppedItem[];
    load(stream: BinaryStream): void;
    save(stream: BinaryStream): void;
    getByteLength(): number;
}
