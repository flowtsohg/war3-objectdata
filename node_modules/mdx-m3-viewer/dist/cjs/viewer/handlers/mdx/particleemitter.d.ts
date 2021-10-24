import MdxEmitter from './emitter';
import Particle from './particle';
/**
 * An MDX particle emitter.
 */
export default class ParticleEmitter extends MdxEmitter {
    updateEmission(dt: number): void;
    emit(): void;
    createObject(): Particle;
}
