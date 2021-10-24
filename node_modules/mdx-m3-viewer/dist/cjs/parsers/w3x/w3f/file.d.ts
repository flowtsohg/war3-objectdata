import MapTitle from './maptitle';
import MapOrder from './maporder';
/**
 * war3campaign.w3f - the campaign information file.
 */
export default class War3CampaignW3f {
    version: number;
    campaignVersion: number;
    editorVersion: number;
    name: string;
    difficulty: string;
    author: string;
    description: string;
    mode: number;
    backgroundScreen: number;
    backgroundScreenPath: string;
    minimapImagePath: string;
    ambientSound: number;
    ambientSoundPath: string;
    terrainFog: number;
    fogStartZ: number;
    fogEndZ: number;
    fogDensity: number;
    fogColor: Uint8Array;
    userInterface: number;
    mapTitles: MapTitle[];
    mapOrders: MapOrder[];
    load(buffer: ArrayBuffer | Uint8Array): void;
    save(): Uint8Array;
    getByteLength(): number;
}
