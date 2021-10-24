import BinaryStream from '../../../common/binarystream';
/**
 * A force.
 */
export default class Force {
    flags: number;
    playerMasks: number;
    name: string;
    load(stream: BinaryStream): void;
    save(stream: BinaryStream): void;
    getByteLength(): number;
}
