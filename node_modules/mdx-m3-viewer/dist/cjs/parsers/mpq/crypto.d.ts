import MpqBlock from './block';
/**
 * MPQ crypto.
 */
export default class MpqCrypto {
    cryptTable: Uint32Array;
    constructor();
    hash(name: string, key: number): number;
    decryptBlock<T extends Uint8Array | Uint32Array>(data: T, key: number): T;
    encryptBlock<T extends Uint8Array | Uint32Array>(data: T, key: number): T;
    computeFileKey(name: string, block: MpqBlock): number;
}
