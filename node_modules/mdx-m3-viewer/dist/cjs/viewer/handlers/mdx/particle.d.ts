import { vec3 } from 'gl-matrix';
import EmittedObject from '../../emittedobject';
import MdxModelInstance from './modelinstance';
import ParticleEmitter from './particleemitter';
/**
 * A spawned model particle.
 */
export default class Particle extends EmittedObject {
    internalInstance: MdxModelInstance;
    velocity: vec3;
    gravity: number;
    constructor(emitter: ParticleEmitter);
    bind(): void;
    update(dt: number): void;
}
