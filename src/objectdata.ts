import War3MapW3d from "mdx-m3-viewer-th/dist/cjs/parsers/w3x/w3d/file";
import War3MapW3u from "mdx-m3-viewer-th/dist/cjs/parsers/w3x/w3u/file";
import { load, save } from "./container";
import { UnitContainer, UnitProps } from "./generated/units";
import { ItemContainer, ItemProps } from "./generated/items";
import {
  DestructableContainer,
  DestructableProps,
} from "./generated/destructables";
import { DoodadContainer, DoodadProps } from "./generated/doodads";
import {
  AbilityContainer,
  AbilityProps,
  AbilitySpecificProps,
} from "./generated/abilities";
import { BuffContainer, BuffProps } from "./generated/buffs";
import { UpgradeContainer, UpgradeProps } from "./generated/upgrades";
import { saveModificationFile } from "./utils";

export interface ModificationFiles {
  w3u?: War3MapW3u;
  w3t?: War3MapW3u;
  w3b?: War3MapW3u;
  w3d?: War3MapW3d;
  w3a?: War3MapW3d;
  w3h?: War3MapW3u;
  w3q?: War3MapW3d;
}

export class ObjectData {
  units = new UnitContainer();
  items = new ItemContainer();
  destructables = new DestructableContainer();
  doodads = new DoodadContainer();
  abilities = new AbilityContainer();
  buffs = new BuffContainer();
  upgrades = new UpgradeContainer();

  load({ w3u, w3t, w3b, w3d, w3a, w3h, w3q }: ModificationFiles): void {
    if (w3u) {
      load(this.units, w3u.originalTable, w3u.customTable, UnitProps);
    }

    if (w3t) {
      load(this.items, w3t.originalTable, w3t.customTable, ItemProps);
    }

    if (w3b) {
      load(
        this.destructables,
        w3b.originalTable,
        w3b.customTable,
        DestructableProps
      );
    }

    if (w3d) {
      load(this.doodads, w3d.originalTable, w3d.customTable, DoodadProps);
    }

    if (w3a) {
      load(
        this.abilities,
        w3a.originalTable,
        w3a.customTable,
        AbilityProps,
        AbilitySpecificProps
      );
    }

    if (w3h) {
      load(this.buffs, w3h.originalTable, w3h.customTable, BuffProps);
    }

    if (w3q) {
      load(this.upgrades, w3q.originalTable, w3q.customTable, UpgradeProps);
    }
  }

  save(): ModificationFiles {
    const files: ModificationFiles = {};

    const w3u = saveModificationFile(War3MapW3u, save(this.units, UnitProps));
    if (w3u) {
      files.w3u = w3u;
    }

    const w3t = saveModificationFile(War3MapW3u, save(this.items, ItemProps));
    if (w3t) {
      files.w3t = w3t;
    }

    const w3b = saveModificationFile(
      War3MapW3u,
      save(this.destructables, DestructableProps)
    );
    if (w3b) {
      files.w3b = w3b;
    }

    const w3d = saveModificationFile(
      War3MapW3d,
      save(this.doodads, DoodadProps)
    );
    if (w3d) {
      files.w3d = w3d;
    }

    const w3a = saveModificationFile(
      War3MapW3d,
      save(this.abilities, AbilityProps, AbilitySpecificProps)
    );
    if (w3a) {
      files.w3a = w3a;
    }

    const w3h = saveModificationFile(War3MapW3u, save(this.buffs, BuffProps));
    if (w3h) {
      files.w3h = w3h;
    }

    const w3q = saveModificationFile(
      War3MapW3d,
      save(this.upgrades, UpgradeProps)
    );
    if (w3q) {
      files.w3q = w3q;
    }

    return files;
  }
}
