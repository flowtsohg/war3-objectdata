"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector4AnimationReference = exports.Vector3AnimationReference = exports.Vector2AnimationReference = exports.Float32AnimationReference = exports.Uint32AnimationReference = exports.Uint16AnimationReference = exports.PixelAnimationReference = exports.AnimationReference = void 0;
/**
 * The base class to all animation references.
 */
class AnimationReference {
    constructor() {
        this.interpolationType = 0;
        this.animFlags = 0;
        this.animId = -1;
        this.initValue = null;
        this.nullValue = null;
    }
    load(stream) {
        this.interpolationType = stream.readUint16();
        this.animFlags = stream.readUint16();
        this.animId = stream.readUint32();
        this.readInitNullValues(stream);
        stream.skip(4); // ?
    }
}
exports.AnimationReference = AnimationReference;
/**
 * A pixel animation reference.
 */
class PixelAnimationReference extends AnimationReference {
    readInitNullValues(stream) {
        this.initValue = stream.readUint8Array(4);
        this.nullValue = stream.readUint8Array(4);
    }
}
exports.PixelAnimationReference = PixelAnimationReference;
/**
 * A uint16 animation reference.
 */
class Uint16AnimationReference extends AnimationReference {
    readInitNullValues(stream) {
        this.initValue = stream.readUint16();
        this.nullValue = stream.readUint16();
    }
}
exports.Uint16AnimationReference = Uint16AnimationReference;
/**
 * A uint32 animation reference.
 */
class Uint32AnimationReference extends AnimationReference {
    readInitNullValues(stream) {
        this.initValue = stream.readUint32();
        this.nullValue = stream.readUint32();
    }
}
exports.Uint32AnimationReference = Uint32AnimationReference;
/**
 * A float32 animation reference.
 */
class Float32AnimationReference extends AnimationReference {
    readInitNullValues(stream) {
        this.initValue = stream.readFloat32();
        this.nullValue = stream.readFloat32();
    }
}
exports.Float32AnimationReference = Float32AnimationReference;
/**
 * A vec2 animation reference.
 */
class Vector2AnimationReference extends AnimationReference {
    readInitNullValues(stream) {
        this.initValue = stream.readFloat32Array(2);
        this.nullValue = stream.readFloat32Array(2);
    }
}
exports.Vector2AnimationReference = Vector2AnimationReference;
/**
 * A vec3 animation reference.
 */
class Vector3AnimationReference extends AnimationReference {
    readInitNullValues(stream) {
        this.initValue = stream.readFloat32Array(3);
        this.nullValue = stream.readFloat32Array(3);
    }
}
exports.Vector3AnimationReference = Vector3AnimationReference;
/**
 * A quat animation reference.
 */
class Vector4AnimationReference extends AnimationReference {
    readInitNullValues(stream) {
        this.initValue = stream.readFloat32Array(4);
        this.nullValue = stream.readFloat32Array(4);
    }
}
exports.Vector4AnimationReference = Vector4AnimationReference;
//# sourceMappingURL=animationreference.js.map