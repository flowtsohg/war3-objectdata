import JassAgent from './agent';
/**
 * type rect
 */
export default class JassRect extends JassAgent {
    center: Float32Array;
    min: Float32Array;
    max: Float32Array;
    constructor(minx: number, miny: number, maxx: number, maxy: number);
}
