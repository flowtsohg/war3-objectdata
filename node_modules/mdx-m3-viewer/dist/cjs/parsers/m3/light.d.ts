import BinaryStream from '../../common/binarystream';
import IndexEntry from './indexentry';
import { Float32AnimationReference, Vector3AnimationReference } from './animationreference';
/**
 * A light.
 */
export default class Light {
    version: number;
    type: number;
    unknown0: number;
    bone: number;
    flags: number;
    unknown1: number;
    unknown2: number;
    lightColor: Vector3AnimationReference;
    lightIntensity: Float32AnimationReference;
    specularColor: Vector3AnimationReference;
    specularIntensity: Float32AnimationReference;
    attenuationFar: Float32AnimationReference;
    unknown3: number;
    attenuationNear: Float32AnimationReference;
    hotSpot: Float32AnimationReference;
    falloff: Float32AnimationReference;
    load(stream: BinaryStream, version: number, _index: IndexEntry[]): void;
}
