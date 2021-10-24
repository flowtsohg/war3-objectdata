import BinaryStream from '../../../common/binarystream';
/**
 * A random item.
 */
export default class RandomItem {
    id: string;
    chance: number;
    load(stream: BinaryStream): void;
    save(stream: BinaryStream): void;
}
