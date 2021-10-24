import { Animation } from '../../../parsers/mdlx/animations';
import EventObject from '../../../parsers/mdlx/eventobject';
import SanityTestData from './data';
export declare function getValuesDiff(a: Uint32Array | Float32Array, b: Uint32Array | Float32Array, c: Uint32Array | Float32Array): number;
export declare function areValuesEqual(a: Uint32Array | Float32Array, b: Uint32Array | Float32Array): boolean;
export default function testTracks(data: SanityTestData, object: Animation | EventObject): void;
