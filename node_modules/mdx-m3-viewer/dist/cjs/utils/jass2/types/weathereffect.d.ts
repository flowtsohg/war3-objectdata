import JassHandle from './handle';
import JassRect from './rect';
/**
 * type weathereffect
 */
export default class JassWeatherEffect extends JassHandle {
    whichRect: JassRect;
    effectId: string;
    enabled: boolean;
    constructor(whichRect: JassRect, effectId: string);
}
