import BinaryStream from '../../common/binarystream';
import IndexEntry from './indexentry';
import Reference from './reference';
import { Uint32AnimationReference, Vector3AnimationReference, Vector4AnimationReference } from './animationreference';
/**
 * A bone.
 */
export default class Bone {
    version: number;
    unknown0: number;
    name: Reference;
    flags: number;
    parent: number;
    unknown1: number;
    location: Vector3AnimationReference;
    rotation: Vector4AnimationReference;
    scale: Vector3AnimationReference;
    visibility: Uint32AnimationReference;
    load(stream: BinaryStream, version: number, index: IndexEntry[]): void;
}
