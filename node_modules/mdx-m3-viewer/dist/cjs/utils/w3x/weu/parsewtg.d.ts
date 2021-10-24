import War3Map from '../../../parsers/w3x/map';
import War3MapWtg from '../../../parsers/w3x/wtg/file';
import { TriggerData } from '../../../parsers/w3x/wtg/triggerdata';
import WeuData from './data';
/**
 * Parses a WTG file, but with a twist - it also tries to fill in unknown function signatures.
 *
 * This lets the WEU converter to handle maps with small TriggerData modifications that are unknown.
 *
 * Unfortunately it only handles simple cases - if there is an unknown signature in an unknown signature, there is no way to parse it as far as I can tell.
 *
 * With that being said, it already managed to parse and mostly fill the signatures of relevant test maps.
 */
export default function parseWtg(map: War3Map, customTriggerData: TriggerData, data: WeuData): War3MapWtg | undefined;
