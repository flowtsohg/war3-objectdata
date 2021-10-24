import BinaryStream from '../../../common/binarystream';
/**
 * A minimap icon.
 */
export default class MinimapIcon {
    type: number;
    location: Int32Array;
    /**
     * Stored as BGRA.
     */
    color: Uint8Array;
    load(stream: BinaryStream): void;
    save(stream: BinaryStream): void;
}
