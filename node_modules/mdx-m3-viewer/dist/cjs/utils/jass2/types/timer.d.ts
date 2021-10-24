import JassAgent from './agent';
/**
 * type timer
 */
export default class JassTimer extends JassAgent {
    elapsed: number;
    timeout: number;
    periodic: boolean;
    handlerFunc: number;
}
