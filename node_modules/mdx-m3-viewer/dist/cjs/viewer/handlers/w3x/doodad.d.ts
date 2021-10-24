import { MappedDataRow } from '../../../utils/mappeddata';
import DooDoodad from '../../../parsers/w3x/doo/doodad';
import MdxModel from '../mdx/model';
import War3MapViewerMap from './map';
import { Widget } from './widget';
/**
 * A doodad.
 */
export default class Doodad extends Widget {
    row: MappedDataRow;
    constructor(map: War3MapViewerMap, model: MdxModel, row: MappedDataRow, doodad: DooDoodad);
}
