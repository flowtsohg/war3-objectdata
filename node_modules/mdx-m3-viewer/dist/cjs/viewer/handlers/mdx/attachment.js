"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genericobject_1 = require("./genericobject");
/**
 * An MDX attachment.
 */
class Attachment extends genericobject_1.default {
    constructor(model, attachment, index) {
        super(model, attachment, index);
        this.internalModel = null;
        const path = attachment.path.replace(/\\/g, '/').toLowerCase().replace('.mdl', '.mdx');
        this.path = path;
        this.attachmentId = attachment.attachmentId;
        // Second condition is against custom resources using arbitrary paths...
        if (path !== '' && path.indexOf('.mdx') != -1) {
            const promise = model.viewer.load(path, model.pathSolver, model.solverParams);
            promise.then((model) => {
                if (model) {
                    this.internalModel = model;
                }
            });
            model.blockers.push(promise);
        }
    }
    getVisibility(out, sequence, frame, counter) {
        return this.getScalarValue(out, 'KATV', sequence, frame, counter, 1);
    }
}
exports.default = Attachment;
//# sourceMappingURL=attachment.js.map