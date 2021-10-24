import BinaryStream from '../../../common/binarystream';
/**
 * A map title.
 */
export default class MapTitle {
    visible: number;
    chapterTitle: string;
    mapTitle: string;
    path: string;
    load(stream: BinaryStream): void;
    save(stream: BinaryStream): void;
    getByteLength(): number;
}
