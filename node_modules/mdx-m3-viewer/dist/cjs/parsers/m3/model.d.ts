import IndexEntry from './indexentry';
import ModelHeader from './modelheader';
/**
 * A model.
 */
export default class Model {
    index: IndexEntry[];
    model: ModelHeader | null;
    load(src: ArrayBuffer | Uint8Array): void;
}
