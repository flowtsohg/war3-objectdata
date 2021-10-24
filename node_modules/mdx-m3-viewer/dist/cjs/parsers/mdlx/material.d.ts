import BinaryStream from '../../common/binarystream';
import TokenStream from './tokenstream';
import Layer from './layer';
export declare const enum Flags {
    None = 0,
    ConstantColor = 1,
    TwoSided = 2,
    SortPrimsNearZ = 8,
    SortPrimsFarZ = 16,
    FullResolution = 32
}
/**
 * A material.
 */
export default class Material {
    priorityPlane: number;
    flags: Flags;
    /**
     * @since 900
     */
    shader: string;
    layers: Layer[];
    readMdx(stream: BinaryStream, version: number): void;
    writeMdx(stream: BinaryStream, version: number): void;
    readMdl(stream: TokenStream): void;
    writeMdl(stream: TokenStream, version: number): void;
    getByteLength(version: number): number;
}
