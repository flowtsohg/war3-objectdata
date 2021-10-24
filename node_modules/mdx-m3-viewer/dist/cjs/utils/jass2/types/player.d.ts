import JassAgent from './agent';
export interface Alliance {
    passive: boolean;
    helpRequest: boolean;
    helpResponse: boolean;
    sharedXp: boolean;
    sharedSpells: boolean;
    sharedVision: boolean;
    sharedControl: boolean;
    sharedAdvancedControl: boolean;
    rescuable: boolean;
    sharedVisionForced: boolean;
}
/**
 * type player
 */
export default class JassPlayer extends JassAgent {
    index: number;
    name: string;
    team: number;
    startLocation: number;
    forcedStartLocation: number;
    color: number;
    race: number;
    racePreference: number;
    raceSelectable: boolean;
    controller: number;
    alliances: Map<number, Alliance>;
    constructor(index: number, maxPlayers: number);
}
