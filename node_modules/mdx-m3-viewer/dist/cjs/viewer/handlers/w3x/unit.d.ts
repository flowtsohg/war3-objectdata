import { MappedDataRow } from '../../../utils/mappeddata';
import DooUnit from '../../../parsers/w3x/unitsdoo/unit';
import MdxModel from '../mdx/model';
import War3MapViewerMap from './map';
import { Widget } from './widget';
/**
 * A unit.
 */
export default class Unit extends Widget {
    /**
     * StartLocation.mdx (and others?) seems to be built-in, and has no row.
     */
    row: MappedDataRow | undefined;
    constructor(map: War3MapViewerMap, model: MdxModel, row: MappedDataRow | undefined, unit: DooUnit);
}
