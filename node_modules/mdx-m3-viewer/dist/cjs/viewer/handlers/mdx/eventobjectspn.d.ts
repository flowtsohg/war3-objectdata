import EmittedObject from '../../emittedobject';
import MdxModelInstance from './modelinstance';
import EventObjectSpnEmitter from './eventobjectspnemitter';
/**
 * An MDX spawned model object.
 */
export default class EventObjectSpn extends EmittedObject {
    internalInstance: MdxModelInstance;
    constructor(emitter: EventObjectSpnEmitter);
    bind(): void;
    update(_dt: number): void;
}
