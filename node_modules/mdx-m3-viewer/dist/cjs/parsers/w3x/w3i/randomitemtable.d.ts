import BinaryStream from '../../../common/binarystream';
import RandomItemSet from './randomitemset';
/**
 * A random item table.
 */
export default class RandomItemTable {
    id: number;
    name: string;
    sets: RandomItemSet[];
    load(stream: BinaryStream): void;
    save(stream: BinaryStream): void;
    getByteLength(): number;
}
