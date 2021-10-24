import MdxEmitter from './emitter';
/**
 * The abstract base MDX event object emitter.
 */
export default abstract class EventObjectEmitter extends MdxEmitter {
    lastValue: number;
    updateEmission(_dt: number): void;
    emit(): void;
}
