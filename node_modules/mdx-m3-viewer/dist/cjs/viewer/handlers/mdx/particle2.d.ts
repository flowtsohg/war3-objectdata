import { vec3 } from 'gl-matrix';
import EmittedObject from '../../emittedobject';
/**
 * A type 2 particle.
 */
export default class Particle2 extends EmittedObject {
    tail: number;
    gravity: number;
    location: vec3;
    velocity: vec3;
    scale: vec3;
    facing: number;
    bind(tail: number): void;
    update(dt: number): void;
}
