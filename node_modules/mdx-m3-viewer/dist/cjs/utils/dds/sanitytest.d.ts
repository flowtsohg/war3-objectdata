import { DdsImage } from '../../parsers/dds/image';
export interface SanityTestNode {
    type: string;
    message: string;
}
export interface SanityTestResult {
    nodes: SanityTestNode[];
    warnings: number;
}
/**
 * Tests for issues in DDS textures.
 */
export default function sanityTest(texture: DdsImage): SanityTestResult;
