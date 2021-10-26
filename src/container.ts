import Modification from 'mdx-m3-viewer/dist/cjs/parsers/w3x/w3u/modification';
import ModificationTable from 'mdx-m3-viewer/dist/cjs/parsers/w3x/w3u/modificationtable';
import ModifiedObject from 'mdx-m3-viewer/dist/cjs/parsers/w3x/w3u/modifiedobject';
import { generateId, pushArray } from './utils';

interface IDs {
  oldId: string;
  newId: string;
}

interface Objects<T, E> {
  game: Readonly<{[key in keyof E]: Readonly<T> }>;
  map: {[key: string]: T };
}

type ModificationLoader<T> = (mapObject: T, modification: Modification) => void;
type ModificationSaver<T> = (gameObject: T, mapObject: T) => Modification[];

function loadObject<T extends IDs, E>(objects: Objects<T, E>, oldId: string, newId: string, modifications: Modification[], loader: ModificationLoader<T>) {
  let objectId;

  if (newId === "\0\0\0\0") {
    objectId = oldId;
  } else {
    objectId = newId;
  }

  const gameObject = objects.game[<keyof E>oldId];

  if (!gameObject) {
    throw Error(`Failed to load an object: ${oldId}`);
  }

  const mapObject = Object.seal(Object.assign({}, { ...gameObject, oldId, newId }));

  for (const modification of modifications) {
    loader(mapObject, modification);
  }

  objects.map[objectId] = mapObject;
}

export function load<T extends IDs, E>(objects: Objects<T, E>, originalTable: ModificationTable, customTable: ModificationTable, loader: ModificationLoader<T>): void {
  for (const { oldId, newId, modifications } of originalTable.objects) {
    loadObject(objects, oldId, newId, modifications, loader);
  }

  for (const { oldId, newId, modifications } of customTable.objects) {
    loadObject(objects, oldId, newId, modifications, loader);
  }
}

export function save<T extends IDs, E>(objects: Objects<T, E>, saver: ModificationSaver<T>): { original: ModifiedObject[], custom: ModifiedObject[] } {
  const original: ModifiedObject[] = [];
  const custom: ModifiedObject[] = [];

  for (const object of Object.values(objects.map)) {
    const gameObject = objects.game[<keyof E>object.oldId];

    if (!gameObject) {
      throw Error(`Tried to save the modifications of an object with an invalid oldId: ${object.oldId} (newId=${object.newId})`);
    }

    const modifications = saver(gameObject, object);

    if (modifications.length) {
      const modifiedObject = new ModifiedObject();

      modifiedObject.oldId = object.oldId;
      modifiedObject.newId = object.newId;
      pushArray(modifiedObject.modifications, modifications)

      if (object.newId === "\0\0\0\0") {
        original.push(modifiedObject);
      } else {
        custom.push(modifiedObject);
      }
    }
  }

  return { original, custom };
}

/**
 * Get an existing object.
 * 
 * If the object isn't in the map data but is in the game data, it will be copied to the map data.
 */
export function get<T extends IDs, E>(objects: Objects<T, E>, id: string): T | undefined {
  let object = objects.map[id];
  
  if (!object) {
    const gameObject = objects.game[<keyof E>id];

    // If this object exists in the game data, copy it and add it to the map data in case it is modified by the caller.
    if (gameObject) {
      object = Object.seal(Object.assign({}, { ...gameObject, oldId: id, newId: "\0\0\0\0" }));

      objects.map[id] = object;
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
export function copy<T extends IDs, E>(objects: Objects<T, E>, baseIdOrObject: string | T, newId?: string): T | undefined {
  let baseId: string;
  let baseObject;

  if (typeof baseIdOrObject === 'string') {
    baseId = baseIdOrObject;

    // Is this object from the map?
    baseObject = objects.map[baseId];
    
    // Is this object from the game?
    if (!baseObject) {
      baseObject = objects.game[<keyof E>baseId];
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
    newId = generateId(objects.map, baseId[0] === baseId[0].toUpperCase());
  }

  // Copy the object.
  const object = Object.seal(Object.assign({ oldId: baseId, newId}, baseObject));

  objects.map[newId] = object;

  return object;
}
