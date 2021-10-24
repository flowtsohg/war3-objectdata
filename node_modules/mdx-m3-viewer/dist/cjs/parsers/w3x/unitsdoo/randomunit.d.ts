import BinaryStream from '../../../common/binarystream';
/**
 * A random unit.
 */
export default class RandomUnit {
    id: string;
    chance: number;
    load(stream: BinaryStream): void;
    save(stream: BinaryStream): void;
}
