"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playercolor_1 = require("./types/playercolor");
const race_1 = require("./types/race");
const playergameresult_1 = require("./types/playergameresult");
const alliancetype_1 = require("./types/alliancetype");
const version_1 = require("./types/version");
const attacktype_1 = require("./types/attacktype");
const damagetype_1 = require("./types/damagetype");
const weapontype_1 = require("./types/weapontype");
const pathingtype_1 = require("./types/pathingtype");
const mousebuttontype_1 = require("./types/mousebuttontype");
const animtype_1 = require("./types/animtype");
const subanimtype_1 = require("./types/subanimtype");
const racepreference_1 = require("./types/racepreference");
const mapcontrol_1 = require("./types/mapcontrol");
const gametype_1 = require("./types/gametype");
const mapflag_1 = require("./types/mapflag");
const placement_1 = require("./types/placement");
const startlocprio_1 = require("./types/startlocprio");
const mapdensity_1 = require("./types/mapdensity");
const gamedifficulty_1 = require("./types/gamedifficulty");
const gamespeed_1 = require("./types/gamespeed");
const playerslotstate_1 = require("./types/playerslotstate");
const volumegroup_1 = require("./types/volumegroup");
const igamestate_1 = require("./types/igamestate");
const fgamestate_1 = require("./types/fgamestate");
const playerstate_1 = require("./types/playerstate");
const unitstate_1 = require("./types/unitstate");
const aidifficulty_1 = require("./types/aidifficulty");
const playerscore_1 = require("./types/playerscore");
const gameevent_1 = require("./types/gameevent");
const playerevent_1 = require("./types/playerevent");
const playerunitevent_1 = require("./types/playerunitevent");
const unitevent_1 = require("./types/unitevent");
const widgetevent_1 = require("./types/widgetevent");
const dialogevent_1 = require("./types/dialogevent");
const limitop_1 = require("./types/limitop");
const unittype_1 = require("./types/unittype");
const itemtype_1 = require("./types/itemtype");
const camerafield_1 = require("./types/camerafield");
const blendmode_1 = require("./types/blendmode");
const raritycontrol_1 = require("./types/raritycontrol");
const texmapflags_1 = require("./types/texmapflags");
const fogstate_1 = require("./types/fogstate");
const effecttype_1 = require("./types/effecttype");
const soundtype_1 = require("./types/soundtype");
function constantHandles() {
    const playerColors = [];
    const races = [];
    const playerGameResults = [];
    const allianceTypes = [];
    const versions = [];
    const attackTypes = [];
    const damageTypes = [];
    const weaponTypes = [];
    const pathingTypes = [];
    const mouseButtonTypes = [];
    const animTypes = [];
    const subAnimTypes = [];
    const racePrefs = [];
    const mapControls = [];
    const gameTypes = [];
    const mapFlags = [];
    const placements = [];
    const startLocPrios = [];
    const mapDensities = [];
    const gameDifficulties = [];
    const gameSpeeds = [];
    const playerSlotStates = [];
    const volumeGroups = [];
    const gameStates = [];
    const playerStates = [];
    const unitStates = [];
    const aiDifficulties = [];
    const playerScores = [];
    const events = [];
    const limitOps = [];
    const unitTypes = [];
    const itemTypes = [];
    const cameraFields = [];
    const blendModes = [];
    const rarityControls = [];
    const texMapFlags = [];
    const fogStates = [];
    const effectTypes = [];
    const soundTypes = [];
    for (let i = 0; i < 24; i++) {
        playerColors[i] = new playercolor_1.default(i);
    }
    for (let i = 0; i < 8; i++) {
        races[i] = new race_1.default(i);
    }
    for (let i = 0; i < 4; i++) {
        playerGameResults[i] = new playergameresult_1.default(i);
    }
    for (let i = 0; i < 10; i++) {
        allianceTypes[i] = new alliancetype_1.default(i);
    }
    for (let i = 0; i < 2; i++) {
        versions[i] = new version_1.default(i);
    }
    for (let i = 0; i < 7; i++) {
        attackTypes[i] = new attacktype_1.default(i);
    }
    for (let i = 0; i < 27; i++) {
        // Note: 1, 2, 3, 6, and 7 not exposed in common.j
        damageTypes[i] = new damagetype_1.default(i);
    }
    for (let i = 0; i < 24; i++) {
        weaponTypes[i] = new weapontype_1.default(i);
    }
    for (let i = 0; i < 8; i++) {
        pathingTypes[i] = new pathingtype_1.default(i);
    }
    for (let i = 0; i < 4; i++) {
        mouseButtonTypes[i] = new mousebuttontype_1.default(i);
    }
    for (let i = 0; i < 11; i++) {
        animTypes[i] = new animtype_1.default(i);
    }
    for (let i = 11; i < 63; i++) {
        subAnimTypes[i] = new subanimtype_1.default(i);
    }
    for (let i = 0; i < 8; i++) {
        const p = Math.pow(2, i);
        racePrefs[p] = new racepreference_1.default(p);
    }
    for (let i = 0; i < 6; i++) {
        mapControls[i] = new mapcontrol_1.default(i);
    }
    for (let i = 0; i < 8; i++) {
        const p = Math.pow(2, i);
        gameTypes[p] = new gametype_1.default(p);
    }
    for (let i = 0; i < 20; i++) {
        const p = Math.pow(2, i);
        mapFlags[p] = new mapflag_1.default(p);
    }
    for (let i = 0; i < 4; i++) {
        placements[i] = new placement_1.default(i);
    }
    for (let i = 0; i < 3; i++) {
        startLocPrios[i] = new startlocprio_1.default(i);
    }
    for (let i = 0; i < 4; i++) {
        mapDensities[i] = new mapdensity_1.default(i);
    }
    for (let i = 0; i < 4; i++) {
        gameDifficulties[i] = new gamedifficulty_1.default(i);
    }
    for (let i = 0; i < 5; i++) {
        gameSpeeds[i] = new gamespeed_1.default(i);
    }
    for (let i = 0; i < 3; i++) {
        playerSlotStates[i] = new playerslotstate_1.default(i);
    }
    for (let i = 0; i < 8; i++) {
        volumeGroups[i] = new volumegroup_1.default(i);
    }
    for (let i = 0; i < 2; i++) {
        gameStates[i] = new igamestate_1.default(i);
    }
    for (let i = 2; i < 3; i++) {
        gameStates[i] = new fgamestate_1.default(i);
    }
    for (let i = 0; i < 26; i++) {
        // Note: 17-24 not exposed in common.j
        playerStates[i] = new playerstate_1.default(i);
    }
    for (let i = 0; i < 4; i++) {
        unitStates[i] = new unitstate_1.default(i);
    }
    for (let i = 0; i < 3; i++) {
        aiDifficulties[i] = new aidifficulty_1.default(i);
    }
    for (let i = 0; i < 25; i++) {
        playerScores[i] = new playerscore_1.default(i);
    }
    for (let i = 0; i < 11; i++) {
        events[i] = new gameevent_1.default(i);
    }
    for (let i = 11; i < 18; i++) {
        events[i] = new playerevent_1.default(i);
    }
    for (let i = 18; i < 52; i++) {
        events[i] = new playerunitevent_1.default(i);
    }
    for (let i = 52; i < 89; i++) {
        events[i] = new unitevent_1.default(i);
    }
    for (let i = 89; i < 90; i++) {
        events[i] = new widgetevent_1.default(i);
    }
    for (let i = 90; i < 92; i++) {
        events[i] = new dialogevent_1.default(i);
    }
    for (let i = 256; i < 260; i++) {
        events[i] = new gameevent_1.default(i);
    }
    for (let i = 261; i < 269; i++) {
        events[i] = new playerevent_1.default(i);
    }
    for (let i = 269; i < 278; i++) {
        events[i] = new playerunitevent_1.default(i);
    }
    for (let i = 286; i < 295; i++) {
        events[i] = new unitevent_1.default(i);
    }
    for (let i = 0; i < 6; i++) {
        limitOps[i] = new limitop_1.default(i);
    }
    for (let i = 0; i < 27; i++) {
        unitTypes[i] = new unittype_1.default(i);
    }
    for (let i = 0; i < 9; i++) {
        itemTypes[i] = new itemtype_1.default(i);
    }
    for (let i = 0; i < 7; i++) {
        cameraFields[i] = new camerafield_1.default(i);
    }
    for (let i = 0; i < 6; i++) {
        blendModes[i] = new blendmode_1.default(i);
    }
    for (let i = 0; i < 1; i++) {
        rarityControls[i] = new raritycontrol_1.default(i);
    }
    for (let i = 0; i < 4; i++) {
        texMapFlags[i] = new texmapflags_1.default(i);
    }
    for (let i = 0; i < 3; i++) {
        const p = Math.pow(2, i);
        fogStates[p] = new fogstate_1.default(p);
    }
    for (let i = 0; i < 7; i++) {
        effectTypes[i] = new effecttype_1.default(i);
    }
    for (let i = 0; i < 2; i++) {
        soundTypes[i] = new soundtype_1.default(i);
    }
    return {
        playerColors,
        races,
        playerGameResults,
        allianceTypes,
        versions,
        attackTypes,
        damageTypes,
        weaponTypes,
        pathingTypes,
        mouseButtonTypes,
        animTypes,
        subAnimTypes,
        racePrefs,
        mapControls,
        gameTypes,
        mapFlags,
        placements,
        startLocPrios,
        mapDensities,
        gameDifficulties,
        gameSpeeds,
        playerSlotStates,
        volumeGroups,
        gameStates,
        playerStates,
        unitStates,
        aiDifficulties,
        playerScores,
        events,
        limitOps,
        unitTypes,
        itemTypes,
        cameraFields,
        blendModes,
        rarityControls,
        texMapFlags,
        fogStates,
        effectTypes,
        soundTypes,
    };
}
exports.default = constantHandles;
//# sourceMappingURL=constanthandles.js.map