import BinaryStream from '../../../common/binarystream';
/**
 * An import.
 */
export default class Import {
    isCustom: number;
    path: string;
    load(stream: BinaryStream): void;
    save(stream: BinaryStream): void;
    getByteLength(): number;
}
