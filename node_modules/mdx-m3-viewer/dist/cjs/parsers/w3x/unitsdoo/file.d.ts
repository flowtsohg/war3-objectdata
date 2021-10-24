import Unit from './unit';
/**
 * war3mapUnits.doo - the units and items file.
 */
export default class War3MapUnitsDoo {
    version: number;
    subversion: number;
    units: Unit[];
    load(buffer: ArrayBuffer | Uint8Array, buildVersion: number): void;
    save(buildVersion: number): Uint8Array;
    getByteLength(buildVersion: number): number;
}
