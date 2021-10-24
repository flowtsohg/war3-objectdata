import Model from '../../../parsers/mdlx/model';
import { SanityTestMessage, SanityTestNode } from './data';
export interface SanityTestResult {
    type: string;
    nodes: (SanityTestNode | SanityTestMessage)[];
    errors: number;
    severe: number;
    warnings: number;
    unused: number;
}
/**
 * Run a sanity test on the model and return the results.
 */
export default function sanityTest(model: Model): SanityTestResult;
