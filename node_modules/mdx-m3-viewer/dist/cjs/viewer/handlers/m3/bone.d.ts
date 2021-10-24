import Bone from '../../../parsers/m3/bone';
import { Uint32AnimationReference, Vector3AnimationReference, Vector4AnimationReference } from '../../../parsers/m3/animationreference';
/**
 * An M3 bone.
 */
export default class M3Bone {
    name: string;
    parent: number;
    location: Vector3AnimationReference;
    rotation: Vector4AnimationReference;
    scale: Vector3AnimationReference;
    visibility: Uint32AnimationReference;
    inhertTranslation: number;
    inheritScale: number;
    inheritRotation: number;
    billboard1: number;
    billboard2: number;
    twoDProjection: number;
    animated: number;
    inverseKinematics: number;
    skinned: number;
    real: number;
    constructor(bone: Bone);
}
