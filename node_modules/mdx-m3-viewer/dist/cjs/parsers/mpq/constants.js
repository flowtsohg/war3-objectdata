"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMPRESSION_ADPCM_STEREO = exports.COMPRESSION_ADPCM_MONO = exports.COMPRESSION_BZIP2 = exports.COMPRESSION_IMPLODE = exports.COMPRESSION_DEFLATE = exports.COMPRESSION_HUFFMAN = exports.FILE_EXISTS = exports.FILE_SECTOR_CRC = exports.FILE_DELETE_MARKER = exports.FILE_SINGLE_UNIT = exports.FILE_PATCH_FILE = exports.FILE_OFFSET_ADJUSTED_KEY = exports.FILE_ENCRYPTED = exports.FILE_COMPRESSED = exports.FILE_IMPLODE = exports.BLOCK_TABLE_KEY = exports.HASH_ENTRY_EMPTY = exports.HASH_ENTRY_DELETED = exports.HASH_FILE_KEY = exports.HASH_NAME_B = exports.HASH_NAME_A = exports.HASH_TABLE_INDEX = exports.HASH_TABLE_KEY = exports.MAGIC = void 0;
exports.MAGIC = 0x1A51504D; // MPQ\x1A reversed
exports.HASH_TABLE_KEY = 0xC3AF3770; // Hash of (hashtable)
exports.HASH_TABLE_INDEX = 0;
exports.HASH_NAME_A = 1;
exports.HASH_NAME_B = 2;
exports.HASH_FILE_KEY = 3;
exports.HASH_ENTRY_DELETED = 0xFFFFFFFE;
exports.HASH_ENTRY_EMPTY = 0xFFFFFFFF;
exports.BLOCK_TABLE_KEY = 0xEC83B3A3; // Hash of (blocktable)
exports.FILE_IMPLODE = 0x00000100;
exports.FILE_COMPRESSED = 0x00000200;
exports.FILE_ENCRYPTED = 0x00010000;
exports.FILE_OFFSET_ADJUSTED_KEY = 0x00020000;
exports.FILE_PATCH_FILE = 0x00100000;
exports.FILE_SINGLE_UNIT = 0x01000000;
exports.FILE_DELETE_MARKER = 0x02000000;
exports.FILE_SECTOR_CRC = 0x04000000;
exports.FILE_EXISTS = 0x80000000;
exports.COMPRESSION_HUFFMAN = 0x01;
exports.COMPRESSION_DEFLATE = 0x02;
exports.COMPRESSION_IMPLODE = 0x08;
exports.COMPRESSION_BZIP2 = 0x10;
exports.COMPRESSION_ADPCM_MONO = 0x40;
exports.COMPRESSION_ADPCM_STEREO = 0x80;
//# sourceMappingURL=constants.js.map