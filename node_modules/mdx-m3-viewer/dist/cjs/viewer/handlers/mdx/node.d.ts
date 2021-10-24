import { quat } from 'gl-matrix';
import { SkeletalNode } from '../../skeletalnode';
/**
 * An MDX node.
 */
export default class MdxNode extends SkeletalNode {
    convertBasis(rotation: quat): void;
}
