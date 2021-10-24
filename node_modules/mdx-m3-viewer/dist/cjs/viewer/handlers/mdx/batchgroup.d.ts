import MdxModel from './model';
import MdxModelInstance from './modelinstance';
import { SkinningType } from './batch';
/**
 * A group of batches that are going to be rendered together.
 */
export default class BatchGroup {
    model: MdxModel;
    skinningType: SkinningType;
    isHd: boolean;
    objects: number[];
    constructor(model: MdxModel, skinningType: SkinningType, isHd: boolean);
    render(instance: MdxModelInstance): void;
}
