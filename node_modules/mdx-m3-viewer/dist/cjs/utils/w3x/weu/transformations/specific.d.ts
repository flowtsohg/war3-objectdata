import ECA from '../../../../parsers/w3x/wtg/eca';
import SubParameters from '../../../../parsers/w3x/wtg/subparameters';
import WeuData from '../data';
/**
 * IsUnitOwnedByPlayer(whichUnit, whichPlayer) == boolean
 * =>
 * GetOwningPlayer(whichUnit) == whichPlayer
 */
export declare function transformerIsUnitOwnedByPlayer(data: WeuData, object: ECA | SubParameters): boolean;
/**
 * IsUnitRace(whichUnit, whichRace) == boolean
 * =>
 * GetUnitRace(whichUnit) == whichRace
 */
export declare function transformerIsUnitRace(data: WeuData, object: ECA | SubParameters): boolean;
/**
 * IsUnitType(whichUnit, UNIT_TYPE_DEAD) == boolean
 * =>
 * IsUnitDeadBJ(whichUnit) == boolean
 */
export declare function transformerIsUnitType(data: WeuData, object: ECA | SubParameters): boolean;
