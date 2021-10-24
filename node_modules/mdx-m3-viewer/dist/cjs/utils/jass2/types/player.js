"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const agent_1 = require("./agent");
/**
 * type player
 */
class JassPlayer extends agent_1.default {
    constructor(index, maxPlayers) {
        super();
        this.team = -1;
        this.startLocation = -1;
        this.forcedStartLocation = -1;
        this.color = -1;
        this.race = 0;
        this.racePreference = -1;
        this.raceSelectable = false;
        this.controller = -1;
        this.alliances = new Map();
        this.index = index;
        this.name = `Player ${index}`;
        for (let i = 0; i < maxPlayers; i++) {
            if (i !== index) {
                this.alliances.set(i, {
                    passive: false,
                    helpRequest: false,
                    helpResponse: false,
                    sharedXp: false,
                    sharedSpells: false,
                    sharedVision: false,
                    sharedControl: false,
                    sharedAdvancedControl: false,
                    rescuable: false,
                    sharedVisionForced: false,
                });
            }
        }
    }
}
exports.default = JassPlayer;
//# sourceMappingURL=player.js.map