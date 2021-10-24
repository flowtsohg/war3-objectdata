import EmittedObject from '../../emittedobject';
/**
 * A ribbon.
 */
export default class Ribbon extends EmittedObject {
    vertices: Float32Array;
    color: Uint8Array;
    slot: number;
    prev: Ribbon | null;
    next: Ribbon | null;
    bind(): void;
    update(dt: number): void;
}
