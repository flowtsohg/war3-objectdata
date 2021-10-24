import { quat } from 'gl-matrix';
import { SkeletalNode } from '../../skeletalnode';
/**
 * An M3 node.
 */
export default class M3Node extends SkeletalNode {
    convertBasis(rotation: quat): void;
}
