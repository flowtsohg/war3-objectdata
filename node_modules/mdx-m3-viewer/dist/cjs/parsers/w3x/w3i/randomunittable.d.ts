import BinaryStream from '../../../common/binarystream';
import RandomUnit from './randomunit';
/**
 * A random unit table.
 */
export default class RandomUnitTable {
    id: number;
    name: string;
    positions: number;
    columnTypes: Int32Array;
    units: RandomUnit[];
    load(stream: BinaryStream): void;
    save(stream: BinaryStream): void;
    getByteLength(): number;
}
