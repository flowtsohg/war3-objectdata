import BinaryStream from '../../common/binarystream';
import Md34 from './md34';
import ModelHeader from './modelheader';
import Sequence from './sequence';
import Stc from './stc';
import Stg from './stg';
import Sts from './sts';
import Bone from './bone';
import Division from './division';
import Region from './region';
import Batch from './batch';
import MaterialReference from './materialreference';
import StandardMaterial from './standardmaterial';
import Layer from './layer';
import Event from './event';
import BoundingSphere from './boundingsphere';
import AttachmentPoint from './attachmentpoint';
import Camera from './camera';
import Sd from './sd';
import UnsupportedEntry from './unsupportedentry';
export declare type EntryType = Md34[] | ModelHeader[] | Sequence[] | Stc[] | Stg[] | Sts[] | Bone[] | Division[] | Region[] | Batch[] | MaterialReference[] | StandardMaterial[] | Layer[] | Event[] | BoundingSphere[] | AttachmentPoint[] | Camera[] | Sd[] | UnsupportedEntry[] | string | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Float32Array | Float32Array[];
export declare type SingleEntryType = Md34 | ModelHeader | Sequence | Stc | Stg | Sts | Bone | Division | Region | Batch | MaterialReference | StandardMaterial | Layer | Event | BoundingSphere | AttachmentPoint | Camera | Sd | UnsupportedEntry | string | number | Float32Array;
/**
 * An index entry.
 */
export default class IndexEntry {
    index: IndexEntry[];
    tag: string;
    offset: number;
    version: number;
    entries: EntryType;
    constructor(stream: BinaryStream, index: IndexEntry[]);
}
