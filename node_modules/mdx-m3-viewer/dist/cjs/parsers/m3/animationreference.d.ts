import BinaryStream from '../../common/binarystream';
/**
 * The base class to all animation references.
 */
export declare abstract class AnimationReference {
    interpolationType: number;
    animFlags: number;
    animId: number;
    initValue: number | Uint8Array | Float32Array | null;
    nullValue: number | Uint8Array | Float32Array | null;
    abstract readInitNullValues(stream: BinaryStream): void;
    load(stream: BinaryStream): void;
}
/**
 * A pixel animation reference.
 */
export declare class PixelAnimationReference extends AnimationReference {
    readInitNullValues(stream: BinaryStream): void;
}
/**
 * A uint16 animation reference.
 */
export declare class Uint16AnimationReference extends AnimationReference {
    readInitNullValues(stream: BinaryStream): void;
}
/**
 * A uint32 animation reference.
 */
export declare class Uint32AnimationReference extends AnimationReference {
    readInitNullValues(stream: BinaryStream): void;
}
/**
 * A float32 animation reference.
 */
export declare class Float32AnimationReference extends AnimationReference {
    readInitNullValues(stream: BinaryStream): void;
}
/**
 * A vec2 animation reference.
 */
export declare class Vector2AnimationReference extends AnimationReference {
    readInitNullValues(stream: BinaryStream): void;
}
/**
 * A vec3 animation reference.
 */
export declare class Vector3AnimationReference extends AnimationReference {
    readInitNullValues(stream: BinaryStream): void;
}
/**
 * A quat animation reference.
 */
export declare class Vector4AnimationReference extends AnimationReference {
    readInitNullValues(stream: BinaryStream): void;
}
