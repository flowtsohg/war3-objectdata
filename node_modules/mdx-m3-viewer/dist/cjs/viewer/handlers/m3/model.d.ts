import Parser from '../../../parsers/m3/model';
import M3ParserModel from '../../../parsers/m3/modelheader';
import M3ParserDivision from '../../../parsers/m3/division';
import Model from '../../model';
import { M3StandardMaterial } from './standardmaterial';
import M3Bone from './bone';
import M3Sequence from './sequence';
import M3Sts from './sts';
import M3Stc from './stc';
import M3Stg from './stg';
import M3AttachmentPoint from './attachment';
import M3Camera from './camera';
import M3Region from './region';
import M3ModelInstance from './modelinstance';
import M3Batch from './batch';
import { HandlerResourceData } from '../../handlerresource';
import MaterialReference from '../../../parsers/m3/materialreference';
/**
 * An M3 model.
 */
export default class M3Model extends Model {
    name: string;
    batches: M3Batch[];
    materials: [unknown[], M3StandardMaterial[]];
    materialMaps: MaterialReference[];
    bones: M3Bone[];
    boneLookup: Uint16Array;
    sequences: M3Sequence[];
    sts: M3Sts[];
    stc: M3Stc[];
    stg: M3Stg[];
    attachments: M3AttachmentPoint[];
    cameras: M3Camera[];
    regions: M3Region[];
    initialReference: Float32Array[];
    elementBuffer: WebGLBuffer | null;
    arrayBuffer: WebGLBuffer | null;
    vertexSize: number;
    uvSetCount: number;
    constructor(bufferOrParser: ArrayBuffer | Parser, resourceData: HandlerResourceData);
    addInstance(): M3ModelInstance;
    setupGeometry(parser: M3ParserModel, div: M3ParserDivision): void;
    mapMaterial(index: number): M3StandardMaterial;
    addGlobalAnims(): void;
}
