"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emittedobject_1 = require("../../emittedobject");
/**
 * An MDX spawned model object.
 */
class EventObjectSpn extends emittedobject_1.default {
    constructor(emitter) {
        super(emitter);
        const emitterObject = emitter.emitterObject;
        const internalModel = emitterObject.internalModel;
        this.internalInstance = internalModel.addInstance();
    }
    bind() {
        const emitter = this.emitter;
        const instance = emitter.instance;
        const scene = instance.scene;
        const node = instance.nodes[emitter.emitterObject.index];
        const internalInstance = this.internalInstance;
        internalInstance.setScene(scene);
        internalInstance.setSequence(0);
        internalInstance.setTransformation(node.worldLocation, node.worldRotation, node.worldScale);
        internalInstance.show();
        this.health = 1;
    }
    update(_dt) {
        const instance = this.internalInstance;
        const model = instance.model;
        // Once the sequence finishes, this event object dies
        if (instance.frame >= model.sequences[0].interval[1]) {
            this.health = 0;
            instance.hide();
        }
    }
}
exports.default = EventObjectSpn;
//# sourceMappingURL=eventobjectspn.js.map