import BinaryStream from '../../../common/binarystream';
/**
 * A map order.
 */
export default class MapOrder {
    u1: number;
    path: string;
    load(stream: BinaryStream): void;
    save(stream: BinaryStream): void;
    getByteLength(): number;
}
