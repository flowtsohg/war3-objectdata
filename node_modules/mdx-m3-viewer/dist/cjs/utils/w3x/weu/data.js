"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const trigger_1 = require("../../../parsers/w3x/wtg/trigger");
const eca_1 = require("../../../parsers/w3x/wtg/eca");
const parameter_1 = require("../../../parsers/w3x/wtg/parameter");
const customtexttrigger_1 = require("../../../parsers/w3x/wct/customtexttrigger");
class WeuData {
    constructor(triggerData, stringTable) {
        this.preplacedObjects = new Map();
        this.changes = [];
        this.stack = [];
        this.triggerData = triggerData;
        this.stringTable = stringTable;
    }
    push(object) {
        this.stack.unshift(object);
    }
    pop() {
        this.stack.shift();
    }
    change(type, reason, data) {
        this.changes.push({ type, reason, data, stack: this.stackToString() });
    }
    stackToString() {
        return this.stack.map((object) => {
            if (object instanceof parameter_1.default) {
                return object.value;
            }
            else {
                return object.name;
            }
        }).reverse().join(' > ');
    }
    getTriggerName() {
        for (const node of this.stack) {
            if (node instanceof trigger_1.default) {
                return node.name;
            }
        }
        return '';
    }
    /**
     * Every time a reference to a preplaced object is encountered while testing the GUI, this will be called with isGUI being true.
     * Every time a reference to a preplaced object is converted to custom script, this will be called with isGUI being false.
     * This is used to track references that existed in GUI before the conversion, but that will be only in custom scripts afterwards.
     * References that are lost due to the conversion are then added in a new trigger called PreplacedObjectReferences.
     */
    updateGUIReference(name, isGUI) {
        // For now track only units and destructibles.
        // Not sure what else needs tracking.
        if (name.startsWith('gg_unit') || name.startsWith('gg_dest')) {
            const preplacedObjects = this.preplacedObjects;
            // If the reference is already known to be used by GUI, no need to do anything.
            if (!preplacedObjects.get(name)) {
                preplacedObjects.set(name, isGUI);
            }
        }
    }
    saveGUIReferences(triggers, customTextTriggers) {
        const references = [];
        // Get all of the references that are no longer references.
        for (const [name, isGUI] of this.preplacedObjects) {
            if (!isGUI) {
                references.push(name);
            }
        }
        // If there are indeed missing references, add them to a new trigger.
        if (references.length) {
            const trigger = new trigger_1.default();
            trigger.name = 'PreplacedObjectReferences';
            trigger.isEnabled = 1;
            trigger.isInitiallyOff = 1;
            for (const reference of references) {
                const eca = new eca_1.default();
                eca.type = 2;
                eca.isEnabled = 1;
                if (reference.startsWith('gg_unit')) {
                    eca.name = 'RemoveUnit';
                }
                else if (reference.startsWith('gg_dest')) {
                    eca.name = 'RemoveDestructable';
                }
                const parameter = new parameter_1.default();
                parameter.type = 1;
                parameter.value = reference;
                eca.parameters[0] = parameter;
                trigger.ecas.push(eca);
            }
            triggers.push(trigger);
            customTextTriggers.push(new customtexttrigger_1.default());
            this.change('references', 'Saved references to preplaced objects lost due to conversions', references.join('\n'));
        }
    }
}
exports.default = WeuData;
//# sourceMappingURL=data.js.map