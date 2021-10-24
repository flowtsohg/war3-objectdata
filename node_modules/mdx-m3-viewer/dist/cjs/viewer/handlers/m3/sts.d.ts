import M3ParserSts from '../../../parsers/m3/sts';
import { AnimationReference } from '../../../parsers/m3/animationreference';
/**
 * M3 animation data validator.
 */
export default class M3Sts {
    animIds: Map<number, number>;
    constructor(sts: M3ParserSts);
    hasData(animRef: AnimationReference): boolean;
}
