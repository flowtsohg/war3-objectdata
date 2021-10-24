"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const batch_1 = require("./batch");
const batchgroup_1 = require("./batchgroup");
const emittergroup_1 = require("./emittergroup");
const genericobject_1 = require("./genericobject");
const particleemitter2object_1 = require("./particleemitter2object");
const ribbonemitterobject_1 = require("./ribbonemitterobject");
function getPrio(object) {
    if (object instanceof batch_1.Batch || object instanceof ribbonemitterobject_1.default) {
        return object.layer.priorityPlane;
    }
    else if (object instanceof particleemitter2object_1.default) {
        return object.priorityPlane;
    }
    else {
        return 0;
    }
}
function matchingGroup(group, object) {
    if (group instanceof batchgroup_1.default) {
        return (object instanceof batch_1.Batch) && (object.skinningType === group.skinningType) && (object.isHd === group.isHd);
    }
    else {
        // All of the emitter objects are generic objects.
        return (object instanceof genericobject_1.default);
    }
}
function createMatchingGroup(model, object) {
    if (object instanceof batch_1.Batch) {
        return new batchgroup_1.default(model, object.skinningType, object.isHd);
    }
    else {
        return new emittergroup_1.default(model);
    }
}
function setupGroups(model) {
    const opaqueBatches = [];
    let translucentBatches = [];
    for (const batch of model.batches) {
        if (batch.layer.filterMode < 2) {
            opaqueBatches.push(batch);
        }
        else {
            translucentBatches.push(batch);
        }
    }
    const opaqueGroups = model.opaqueGroups;
    const translucentGroups = model.translucentGroups;
    let currentGroup = null;
    for (const object of opaqueBatches) {
        if (!currentGroup || !matchingGroup(currentGroup, object)) {
            currentGroup = createMatchingGroup(model, object);
            opaqueGroups.push(currentGroup);
        }
        currentGroup.objects.push(object.index);
    }
    // Sort the translucent batches based on filter mode.
    translucentBatches = translucentBatches.sort((a, b) => a.layer.filterMode - b.layer.filterMode);
    // Sort between all of the translucent batches and emitters based on their priority planes.
    // Event objects have no explicit priority planes, and default to 0.
    const objects = [...translucentBatches, ...model.eventObjects, ...model.particleEmitters2, ...model.ribbonEmitters].sort((a, b) => getPrio(a) - getPrio(b));
    currentGroup = null;
    for (const object of objects) {
        if (object instanceof batch_1.Batch || object.geometryEmitterType !== -1) {
            if (!currentGroup || !matchingGroup(currentGroup, object)) {
                currentGroup = createMatchingGroup(model, object);
                translucentGroups.push(currentGroup);
            }
            currentGroup.objects.push(object.index);
        }
    }
}
exports.default = setupGroups;
//# sourceMappingURL=setupgroups.js.map