import BinaryStream from '../../common/binarystream';
import TokenStream from './tokenstream';
export declare const enum InterpolationType {
    DontInterp = 0,
    Linear = 1,
    Hermite = 2,
    Bezier = 3
}
/**
 * An animation.
 */
export declare abstract class Animation {
    name: string;
    interpolationType: InterpolationType;
    globalSequenceId: number;
    frames: number[];
    values: (Uint32Array | Float32Array)[];
    inTans: (Uint32Array | Float32Array)[];
    outTans: (Uint32Array | Float32Array)[];
    abstract readMdxValue(stream: BinaryStream): Uint32Array | Float32Array;
    abstract writeMdxValue(stream: BinaryStream, value: Uint32Array | Float32Array): void;
    abstract readMdlValue(stream: TokenStream): Uint32Array | Float32Array;
    abstract writeMdlValue(stream: TokenStream, name: string, value: Uint32Array | Float32Array): void;
    readMdx(stream: BinaryStream, name: string): void;
    writeMdx(stream: BinaryStream): void;
    readMdl(stream: TokenStream, name: string): void;
    writeMdl(stream: TokenStream, name: string): void;
    getByteLength(): number;
}
/**
 * A uint animation.
 */
export declare class UintAnimation extends Animation {
    readMdxValue(stream: BinaryStream): Uint32Array;
    writeMdxValue(stream: BinaryStream, value: Uint32Array): void;
    readMdlValue(stream: TokenStream): Uint32Array;
    writeMdlValue(stream: TokenStream, name: string, value: Uint32Array): void;
}
/**
 * A float animation
 */
export declare class FloatAnimation extends Animation {
    readMdxValue(stream: BinaryStream): Float32Array;
    writeMdxValue(stream: BinaryStream, value: Float32Array): void;
    readMdlValue(stream: TokenStream): Float32Array;
    writeMdlValue(stream: TokenStream, name: string, value: Float32Array): void;
}
/**
 * A vector 3 animation.
 */
export declare class Vector3Animation extends Animation {
    readMdxValue(stream: BinaryStream): Float32Array;
    writeMdxValue(stream: BinaryStream, value: Float32Array): void;
    readMdlValue(stream: TokenStream): Float32Array;
    writeMdlValue(stream: TokenStream, name: string, value: Float32Array): void;
}
/**
 * A vector 4 animation.
 */
export declare class Vector4Animation extends Animation {
    readMdxValue(stream: BinaryStream): Float32Array;
    writeMdxValue(stream: BinaryStream, value: Float32Array): void;
    readMdlValue(stream: TokenStream): Float32Array;
    writeMdlValue(stream: TokenStream, name: string, value: Float32Array): void;
}
