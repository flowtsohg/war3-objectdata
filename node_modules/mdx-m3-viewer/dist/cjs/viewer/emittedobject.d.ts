import Emitter from './emitter';
/**
 * An emitted object.
 */
export default abstract class EmittedObject {
    emitter: Emitter;
    index: number;
    health: number;
    abstract bind(emitData?: unknown): void;
    abstract update(dt: number): void;
    constructor(emitter: Emitter);
}
