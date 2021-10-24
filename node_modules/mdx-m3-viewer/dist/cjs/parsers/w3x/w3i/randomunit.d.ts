import BinaryStream from '../../../common/binarystream';
/**
 * A random unit.
 */
export default class RandomUnit {
    chance: number;
    ids: string[];
    load(stream: BinaryStream, positions: number): void;
    save(stream: BinaryStream): void;
}
