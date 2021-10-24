import ParticleEmitter2Object from './particleemitter2object';
import MdxModelInstance from './modelinstance';
import MdxNode from './node';
import MdxEmitter from './emitter';
import Particle2 from './particle2';
/**
 * An MDX particle emitter type 2.
 */
export default class ParticleEmitter2 extends MdxEmitter {
    node: MdxNode;
    lastEmissionKey: number;
    constructor(instance: MdxModelInstance, emitterObject: ParticleEmitter2Object);
    updateEmission(dt: number): void;
    emit(): void;
    createObject(): Particle2;
}
