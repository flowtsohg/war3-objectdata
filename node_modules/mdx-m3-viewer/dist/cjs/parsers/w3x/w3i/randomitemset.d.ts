import BinaryStream from '../../../common/binarystream';
import RandomItem from './randomitem';
/**
 * A random item set.
 */
export default class RandomItemSet {
    items: RandomItem[];
    load(stream: BinaryStream): void;
    save(stream: BinaryStream): void;
    getByteLength(): number;
}
