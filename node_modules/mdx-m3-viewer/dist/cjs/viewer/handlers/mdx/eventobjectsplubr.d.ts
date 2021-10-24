import EmittedObject from '../../emittedobject';
/**
 * An MDX splat or ubersplat object.
 */
export default class EventObjectSplUbr extends EmittedObject {
    vertices: Float32Array;
    bind(): void;
    update(dt: number): void;
}
