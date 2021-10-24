import { BlpImage } from '../../parsers/blp/image';
export interface SanityTestNode {
    type: string;
    message: string;
}
export interface SanityTestResult {
    nodes: SanityTestNode[];
    warnings: number;
}
/**
 * Tests for issues in BLP textures.
 */
export default function sanityTest(texture: BlpImage): SanityTestResult;
