import EmittedObject from './emittedobject';
/**
 * An emitted object updater.
 */
export default class EmittedObjectUpdater {
    objects: EmittedObject[];
    alive: number;
    add(object: EmittedObject): void;
    update(dt: number): void;
}
