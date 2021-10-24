import Force from './force';
import Player from './player';
import RandomItemTable from './randomitemtable';
import RandomUnitTable from './randomunittable';
import TechAvailabilityChange from './techavailabilitychange';
import UpgradeAvailabilityChange from './upgradeavailabilitychange';
/**
 * war3map.w3i - the general information file.
 */
export default class War3MapW3i {
    version: number;
    saves: number;
    editorVersion: number;
    buildVersion: Uint32Array;
    name: string;
    author: string;
    description: string;
    recommendedPlayers: string;
    cameraBounds: Float32Array;
    cameraBoundsComplements: Int32Array;
    playableSize: Int32Array;
    flags: number;
    tileset: string;
    campaignBackground: number;
    loadingScreenModel: string;
    loadingScreenText: string;
    loadingScreenTitle: string;
    loadingScreenSubtitle: string;
    loadingScreen: number;
    prologueScreenModel: string;
    prologueScreenText: string;
    prologueScreenTitle: string;
    prologueScreenSubtitle: string;
    useTerrainFog: number;
    fogHeight: Float32Array;
    fogDensity: number;
    fogColor: Uint8Array;
    globalWeather: number;
    soundEnvironment: string;
    lightEnvironmentTileset: string;
    waterVertexColor: Uint8Array;
    scriptMode: number;
    graphicsMode: number;
    players: Player[];
    forces: Force[];
    upgradeAvailabilityChanges: UpgradeAvailabilityChange[];
    techAvailabilityChanges: TechAvailabilityChange[];
    randomUnitTables: RandomUnitTable[];
    randomItemTables: RandomItemTable[];
    unknown1: number;
    load(buffer: ArrayBuffer | Uint8Array): void;
    save(): Uint8Array;
    getByteLength(): number;
    /**
     * Returns the build version as major+minor.
     *
     * For example version 1.31.X will return 131.
     *
     * Note that this will always return 0 for any version below 1.31.
     */
    getBuildVersion(): number;
}
