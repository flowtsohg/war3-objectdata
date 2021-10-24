"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OEContainer = void 0;
// import ModifiedObject from '../../../../parsers/w3x/w3u/modifiedobject';
// import { MappedData } from '../../../mappeddata';
const NULL = '\0\0\0\0';
const GENERATE_ID_ATTEMPTS = 10000;
class OEContainer {
    get(id) {
        let object = this.map[id];
        if (!object) {
            const gameObject = this.game[id];
            // If this object exists in the game data, copy it and add it to the map data in case it is modified by the caller.
            if (gameObject) {
                object = Object.assign({}, Object.assign({ oldId: id, newId: '\0\0\0\0' }, gameObject));
                this.map[id] = object;
            }
        }
        return object;
    }
    loadObject(oldId, newId, modifications) {
        let objectId;
        if (newId === '\0\0\0\0') {
            objectId = oldId;
        }
        else {
            objectId = newId;
        }
        const gameObject = this.game[oldId];
        if (!gameObject) {
            throw Error(`Failed to load an object: ${oldId}`);
        }
        const mapObject = Object.assign({}, Object.assign({ oldId, newId }, gameObject));
        for (const modification of modifications) {
            this.loadModification(mapObject, modification);
        }
        this.map[objectId] = mapObject;
    }
    load(originalTable, customTable) {
        for (const { oldId, newId, modifications } of originalTable.objects) {
            this.loadObject(oldId, newId, modifications);
        }
        for (const { oldId, newId, modifications } of customTable.objects) {
            this.loadObject(oldId, newId, modifications);
        }
    }
}
exports.OEContainer = OEContainer;
//# sourceMappingURL=container.js.map