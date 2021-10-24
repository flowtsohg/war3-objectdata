import MdxModel from './model';
import MdxModelInstance from './modelinstance';
/**
 * A group of emitters that are going to be rendered together.
 */
export default class EmitterGroup {
    model: MdxModel;
    objects: number[];
    constructor(model: MdxModel);
    render(instance: MdxModelInstance): void;
}
