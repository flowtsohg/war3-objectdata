import ModelInstance from './modelinstance';
import EmittedObject from './emittedobject';
/**
 * An emitter.
 */
export default abstract class Emitter {
    instance: ModelInstance;
    objects: EmittedObject[];
    alive: number;
    currentEmission: number;
    abstract createObject(): EmittedObject;
    abstract updateEmission(dt: number): void;
    abstract emit(): void;
    constructor(instance: ModelInstance);
    /**
     * Update this emitter.
     */
    update(dt: number): void;
    /**
     * Clear any emitted objects.
     */
    clear(): void;
    emitObject(emitData?: unknown): EmittedObject;
    kill(object: EmittedObject): void;
}
