import BinaryStream from '../../common/binarystream';
import IndexEntry from './indexentry';
import Reference from './reference';
import { Float32AnimationReference } from './animationreference';
/**
 * A camera.
 */
export default class Camera {
    version: number;
    bone: number;
    name: Reference;
    fieldOfView: Float32AnimationReference;
    unknown0: number;
    farClip: Float32AnimationReference;
    nearClip: Float32AnimationReference;
    clip2: Float32AnimationReference;
    focalDepth: Float32AnimationReference;
    falloffStart: Float32AnimationReference;
    falloffEnd: Float32AnimationReference;
    depthOfField: Float32AnimationReference;
    load(stream: BinaryStream, version: number, index: IndexEntry[]): void;
}
