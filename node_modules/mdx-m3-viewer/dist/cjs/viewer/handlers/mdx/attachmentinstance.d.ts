import MdxModelInstance from './modelinstance';
import Attachment from './attachment';
/**
 * An attachment instance.
 */
export default class AttachmentInstance {
    instance: MdxModelInstance;
    attachment: Attachment;
    internalInstance: MdxModelInstance;
    constructor(instance: MdxModelInstance, attachment: Attachment);
    update(): void;
}
