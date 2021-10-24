import MdlxAttachment from '../../../parsers/mdlx/attachment';
import GenericObject from './genericobject';
import MdxModel from './model';
/**
 * An MDX attachment.
 */
export default class Attachment extends GenericObject {
    path: string;
    attachmentId: number;
    internalModel: MdxModel | null;
    constructor(model: MdxModel, attachment: MdlxAttachment, index: number);
    getVisibility(out: Float32Array, sequence: number, frame: number, counter: number): number;
}
