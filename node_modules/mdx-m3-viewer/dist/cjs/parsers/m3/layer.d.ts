import BinaryStream from '../../common/binarystream';
import IndexEntry from './indexentry';
import Reference from './reference';
import { PixelAnimationReference, Uint16AnimationReference, Uint32AnimationReference, Float32AnimationReference, Vector2AnimationReference, Vector3AnimationReference } from './animationreference';
/**
 * A layer.
 */
export default class Layer {
    version: number;
    unknown0: number;
    imagePath: Reference;
    color: PixelAnimationReference;
    flags: number;
    uvSource: number;
    colorChannelSetting: number;
    brightMult: Float32AnimationReference;
    midtoneOffset: Float32AnimationReference;
    unknown1: number;
    noiseAmp: number;
    noiseFreq: number;
    rttChannel: number;
    videoFrameRate: number;
    videoStartFrame: number;
    videoEndFrame: number;
    videoMode: number;
    videoSyncTiming: number;
    videoPlay: Uint32AnimationReference;
    videoRestart: Uint32AnimationReference;
    flipBookRows: number;
    flipBookColumns: number;
    flipBookFrame: Uint16AnimationReference;
    uvOffset: Vector2AnimationReference;
    uvAngle: Vector3AnimationReference;
    uvTiling: Vector2AnimationReference;
    unknown2: Uint32AnimationReference;
    unknown3: Float32AnimationReference;
    brightness: Float32AnimationReference;
    triPlanarOffset: Vector3AnimationReference;
    triPlanarScale: Vector3AnimationReference;
    unknown4: number;
    fresnelType: number;
    fresnelExponent: number;
    fresnelMin: number;
    fresnelMaxOffset: number;
    unknown5: number;
    unknown6: Uint8Array;
    fresnelInvertedMaskX: number;
    fresnelInvertedMaskY: number;
    fresnelInvertedMaskZ: number;
    fresnelRotationYaw: number;
    fresnelRotationPitch: number;
    unknown7: number;
    load(stream: BinaryStream, version: number, index: IndexEntry[]): void;
}
