"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Heap allocations needed for this module.
const visibilityHeap = new Float32Array(1);
/**
 * An attachment instance.
 */
class AttachmentInstance {
    constructor(instance, attachment) {
        const internalModel = attachment.internalModel;
        const internalInstance = internalModel.addInstance();
        internalInstance.setSequenceLoopMode(2);
        internalInstance.dontInheritScaling = false;
        internalInstance.hide();
        internalInstance.setParent(instance.nodes[attachment.objectId]);
        this.instance = instance;
        this.attachment = attachment;
        this.internalInstance = internalInstance;
    }
    update() {
        const instance = this.instance;
        const internalInstance = this.internalInstance;
        if (instance.scene && instance.sequence !== -1) {
            this.attachment.getVisibility(visibilityHeap, instance.sequence, instance.frame, instance.counter);
            if (visibilityHeap[0] > 0.1) {
                // The parent instance might not actually be in a scene.
                // This happens if loading a local model, where loading is instant and adding to a scene always comes afterwards.
                // Therefore, do it here dynamically.
                instance.scene.addInstance(internalInstance);
                if (internalInstance.hidden()) {
                    internalInstance.show();
                    // Every time the attachment becomes visible again, restart its first sequence.
                    internalInstance.setSequence(0);
                }
            }
            else {
                internalInstance.hide();
            }
        }
    }
}
exports.default = AttachmentInstance;
//# sourceMappingURL=attachmentinstance.js.map