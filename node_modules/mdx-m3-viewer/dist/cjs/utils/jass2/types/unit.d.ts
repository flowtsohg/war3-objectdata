import JassWidget from './widget';
import JassPlayer from './player';
/**
 * type unit
 */
export default class JassUnit extends JassWidget {
    player: JassPlayer;
    unitId: string;
    x: number;
    y: number;
    face: number;
    acquireRange: number;
    constructor(player: JassPlayer, unitId: number, x: number, y: number, face: number);
}
