import War3MapW3d from "mdx-m3-viewer-th/dist/cjs/parsers/w3x/w3d/file";
import War3MapW3u from "mdx-m3-viewer-th/dist/cjs/parsers/w3x/w3u/file";
import Modification from "mdx-m3-viewer-th/dist/cjs/parsers/w3x/w3u/modification";
import ModifiedObject from "mdx-m3-viewer-th/dist/cjs/parsers/w3x/w3u/modifiedobject";
import { randomInRange } from "mdx-m3-viewer-th/dist/cjs/common/math";

export function war3ToTS(
  war3Type: string,
  war3Value: string | number | undefined
): string | number | boolean {
  let tsValue = war3Value;

  // Remove some inconsistencies.
  if (typeof tsValue === "string") {
    tsValue = tsValue.trim();
  }

  if (war3Type === "string") {
    if (tsValue === undefined) {
      tsValue = "";
    }

    if (typeof tsValue !== "string") {
      throw Error(
        `Type mismatch: ${war3Type} ${war3Value} (${typeof war3Value})`
      );
    }

    if (tsValue === "_" || tsValue === "-") {
      tsValue = "";
    }

    return tsValue;
  } else if (war3Type === "int") {
    if (typeof tsValue === "string") {
      tsValue = parseInt(tsValue, 10);

      if (isNaN(tsValue)) {
        tsValue = 0;
      }
    } else if (tsValue === undefined) {
      tsValue = 0;
    }

    return tsValue;
  } else if (war3Type === "unreal" || war3Type === "real") {
    if (typeof tsValue === "string") {
      tsValue = parseFloat(tsValue);

      if (isNaN(tsValue)) {
        tsValue = 0.0;
      }
    } else if (tsValue === undefined) {
      tsValue = 0.0;
    }

    return tsValue;
  } else if (war3Type === "bool") {
    if (tsValue === undefined) {
      return false;
    }

    if (typeof tsValue === "string") {
      if (tsValue === "1") {
        return true;
      } else if (
        tsValue === "0" ||
        tsValue === "-" ||
        tsValue === "0,1" ||
        tsValue === ""
      ) {
        return false;
      }

      throw Error(
        `Type mismatch: ${war3Type} ${war3Value} (${typeof war3Value})`
      );
    } else {
      return !!tsValue;
    }
  }

  if (tsValue === undefined) {
    tsValue = "";
  }

  return tsValue;
}

export function war3ToDefaultTS(war3Type: "string"): string;
export function war3ToDefaultTS(war3Type: "int"): number;
export function war3ToDefaultTS(war3Type: "unreal"): number;
export function war3ToDefaultTS(war3Type: "real"): number;
export function war3ToDefaultTS(war3Type: "bool"): boolean;
export function war3ToDefaultTS(war3Type: string): string;
export function war3ToDefaultTS(war3Type: string): string | number | boolean {
  if (war3Type === "string") {
    return "";
  } else if (
    war3Type === "int" ||
    war3Type === "unreal" ||
    war3Type === "real"
  ) {
    return 0;
  } else if (war3Type === "bool") {
    return false;
  }

  return "";
}

export function tsToWar3(
  id: string,
  war3Type: string,
  tsValue: string | number | boolean
): Modification {
  let variableType = 0;
  let value: string | number;

  if (typeof tsValue === "string") {
    variableType = 3;
    value = tsValue;
  } else if (typeof tsValue === "number") {
    if (war3Type === "int") {
      variableType = 0;
      value = tsValue | 0;
    } else {
      variableType = 2;
      value = tsValue;
    }
  } else {
    variableType = 0;

    if (tsValue) {
      value = 1;
    } else {
      value = 0;
    }
  }

  const modification = new Modification();

  modification.id = id;
  modification.variableType = variableType;
  modification.value = value;

  return modification;
}

// Because it's much faster than push(...pushed) or out=out.concat(pushed)
export function pushArray<T>(out: T[], pushed: T[]) {
  for (const object of pushed) {
    out.push(object);
  }
}

export function saveModificationFile(
  ModificationsClass: typeof War3MapW3u | typeof War3MapW3d,
  { original, custom }: { original: ModifiedObject[]; custom: ModifiedObject[] }
): War3MapW3u | War3MapW3d | undefined {
  if (original.length || custom.length) {
    const file = new ModificationsClass();

    file.version = 2;
    pushArray(file.originalTable.objects, original);
    pushArray(file.customTable.objects, custom);

    return file;
  }

  return;
}

export function war3TypeToTS(type: string): "string" | "number" | "boolean" {
  if (type === "string") {
    return "string";
  } else if (type === "int" || type === "unreal" || type === "real") {
    return "number";
  } else if (type === "bool") {
    return "boolean";
  }

  console.warn(`Unhandled type: ${type}`);
  return "string";
}

export function pascalCase(what: string): string {
  return what
    .replace(/[-(),]/g, " ")
    .replace(/['’!.]/g, "")
    .replace(/\//g, " Or ")
    .replace(/\&/g, " And ")
    .replace(/\+/g, " Plus ")
    .replace(/\%/g, " Percent ")
    .replace(/ +/g, " ")
    .trim()
    .split(" ")
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join("");
}

export function camelCase(what: string): string {
  const pascal = pascalCase(what);

  return `${pascal[0].toLowerCase()}${pascal.slice(1)}`;
}

const GENERATE_ID_ATTEMPTS = 10000;
export function generateId(
  map: Record<string, unknown>,
  capitalize: boolean
): string {
  let first = 97;

  if (capitalize) {
    first = 65;
  }

  for (let i = 0; i < GENERATE_ID_ATTEMPTS; i++) {
    const id = String.fromCharCode(
      randomInRange(first, first + 25),
      randomInRange(97, 122),
      randomInRange(97, 122),
      randomInRange(97, 122)
    );

    if (!map[id]) {
      return id;
    }
  }

  throw Error("FAILED TO GENERATE A UNIQUE ID");
}
