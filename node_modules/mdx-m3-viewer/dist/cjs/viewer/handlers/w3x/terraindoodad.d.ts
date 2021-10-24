import { MappedDataRow } from '../../../utils/mappeddata';
import DooTerrainDoodad from '../../../parsers/w3x/doo/terraindoodad';
import MdxModel from '../mdx/model';
import MdxModelInstance from '../mdx/modelinstance';
import War3MapViewerMap from './map';
/**
 * A cliff/terrain doodad.
 */
export default class TerrainDoodad {
    instance: MdxModelInstance;
    row: MappedDataRow;
    constructor(map: War3MapViewerMap, model: MdxModel, row: MappedDataRow, doodad: DooTerrainDoodad);
}
