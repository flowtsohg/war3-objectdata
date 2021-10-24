import BinaryStream from '../../../common/binarystream';
/**
 * A sound.
 */
export default class Sound {
    name: string;
    file: string;
    eaxEffect: string;
    flags: number;
    fadeInRate: number;
    fadeOutRate: number;
    volume: number;
    pitch: number;
    pitchVariance: number;
    priority: number;
    channel: number;
    minDistance: number;
    maxDistance: number;
    distanceCutoff: number;
    coneInside: number;
    coneOutside: number;
    coneOutsideVolume: number;
    coneOrientationX: number;
    coneOrientationY: number;
    coneOrientationZ: number;
    load(stream: BinaryStream, version: number): void;
    save(stream: BinaryStream, version: number): void;
    getByteLength(version: number): number;
}
