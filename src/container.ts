import Modification from 'mdx-m3-viewer/dist/cjs/parsers/w3x/w3u/modification';
import ModificationTable from 'mdx-m3-viewer/dist/cjs/parsers/w3x/w3u/modificationtable';
import ModifiedObject from 'mdx-m3-viewer/dist/cjs/parsers/w3x/w3u/modifiedobject';
import { randomInRange } from 'mdx-m3-viewer/dist/cjs/common/math';
import { pushArray } from './utils';

const NULL = '\0\0\0\0';
const GENERATE_ID_ATTEMPTS = 10000;

export abstract class OEContainer<T> {
  /**
   * Game objects.
   */
  abstract game: {[key: string]: T};
  /**
   * Map objects.
   */
  abstract map: {[key: string]: { oldId: string, newId: string } & T};
  
  abstract loadModification(object: { oldId: string, newId: string } & T, modification: Modification): void;
  abstract saveModifications(gameObject: T, object: { oldId: string, newId: string } & T): Modification[];

  /**
   * Get an existing object.
   * 
   * If the object isn't in the map data but is in the game data, it will be copied to the map data.
   */
  get(id: string): { oldId: string, newId: string } & T | undefined {
    let object = this.map[id];
    
    if (!object) {
      const gameObject = this.game[id];

      // If this object exists in the game data, copy it and add it to the map data in case it is modified by the caller.
      if (gameObject) {
        object = Object.assign({}, { oldId: id, newId: NULL, ...gameObject });

        this.map[id] = object;
      }
    }

    return object;
  }

  /**
   * Copy an existing object.
   * 
   * The source object can either be given as a string ID, or an object returned from previous get/copy calls.
   * 
   * If newId is supplied, it will be used as the new object's ID, otherwise a random ID is generated.
   * 
   * If a random ID is generated, its first letter will be capitalized if the base ID's first letter is capitalized, to support hero units.
   */
  copy(baseIdOrObject: string | { oldId: string, newId: string } & T, newId?: string): { oldId: string, newId: string } & T | undefined {
    let baseId: string;
    let baseObject;

    if (typeof baseIdOrObject === 'string') {
      baseId = baseIdOrObject;

      // Is this object from the map?
      baseObject = this.map[baseId];
      
      // Is this object from the game?
      if (!baseObject) {
        baseObject = this.game[baseId];
      }
    } else {
      baseId = baseIdOrObject.oldId;
      baseObject = baseIdOrObject;
    }

    if (!baseObject) {
      throw Error(`Tried to copy an object that does not exist: ${baseId}`)
    }

    // If an ID was't given, generate one.
    if (!newId) {
      newId = this.generateId(baseId[0] === baseId[0].toUpperCase());
    }

    // Copy the object.
    const object = Object.assign({ oldId: baseId, newId}, baseObject);

    this.map[newId] = object;

    return object;
  }

  /**
   * Checks if this collection has an object with the given ID.
   * 
   * Does not check the base game data.
   */
   has(id: string): boolean {
    return !!this.map[id];
  }

  loadObject(oldId: string, newId: string, modifications: Modification[]) {
    let objectId;

    if (newId === NULL) {
      objectId = oldId;
    } else {
      objectId = newId;
    }

    const gameObject = this.game[oldId];

    if (!gameObject) {
      throw Error(`Failed to load an object: ${oldId}`);
    }

    const mapObject = Object.assign({}, { oldId, newId, ...gameObject });

    for (const modification of modifications) {
      this.loadModification(mapObject, modification);
    }

    this.map[objectId] = mapObject;
  }

  load(originalTable: ModificationTable, customTable: ModificationTable): void {
    for (const { oldId, newId, modifications } of originalTable.objects) {
      this.loadObject(oldId, newId, modifications);
    }

    for (const { oldId, newId, modifications } of customTable.objects) {
      this.loadObject(oldId, newId, modifications);
    }
  }

  save(): { original: ModifiedObject[], custom: ModifiedObject[] } {
    const original: ModifiedObject[] = [];
    const custom: ModifiedObject[] = [];

    for (const object of Object.values(this.map)) {
      const gameObject = this.game[object.oldId];

      if (!gameObject) {
        throw Error(`Tried to save the modifications of an object with an invalid oldId: ${object.oldId} (newId=${object.newId})`);
      }

      const modifications = this.saveModifications(gameObject, object);

      if (modifications.length) {
        const newId = object.newId;
        const modifiedObject = new ModifiedObject();

        modifiedObject.oldId = object.oldId;
        modifiedObject.newId = object.newId;
        pushArray(modifiedObject.modifications, modifications)

        if (object.newId === NULL) {
          original.push(modifiedObject);
        } else {
          custom.push(modifiedObject);
        }
      }
    }

    return { original, custom };
  }

  generateId(capitalize: boolean): string {
    let first = 97;

    if (capitalize) {
      first = 65;
    }

    for (let i = 0; i < GENERATE_ID_ATTEMPTS; i++) {
      const id = String.fromCharCode(randomInRange(first, first + 25), randomInRange(97, 122), randomInRange(97, 122), randomInRange(97, 122));

      if (!this.has(id)) {
        return id;
      }
    }

    throw Error('FAILED TO GENERATE A UNIQUE ID');
  }
}
