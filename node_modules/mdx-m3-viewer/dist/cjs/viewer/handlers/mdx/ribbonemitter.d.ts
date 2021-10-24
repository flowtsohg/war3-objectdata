import MdxEmitter from './emitter';
import Ribbon from './ribbon';
/**
 * A ribbon emitter.
 */
export default class RibbonEmitter extends MdxEmitter {
    first: Ribbon | null;
    last: Ribbon | null;
    updateEmission(dt: number): void;
    emit(): void;
    kill(object: Ribbon): void;
    createObject(): Ribbon;
}
