import BinaryStream from '../../../common/binarystream';
/**
 * A random item.
 */
export default class RandomItem {
    chance: number;
    id: string;
    load(stream: BinaryStream): void;
    save(stream: BinaryStream): void;
}
