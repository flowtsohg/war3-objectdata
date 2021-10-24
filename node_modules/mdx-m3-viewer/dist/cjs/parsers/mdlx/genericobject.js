"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animatedobject_1 = require("./animatedobject");
/**
 * A generic object.
 *
 * The parent class for all objects that exist in the world, and may contain spatial animations.
 * This includes bones, particle emitters, and many other things.
 */
class GenericObject extends animatedobject_1.default {
    constructor(flags = 0 /* None */) {
        super();
        this.name = '';
        this.objectId = -1;
        this.parentId = -1;
        this.flags = flags;
    }
    readMdx(stream) {
        const size = stream.readUint32();
        this.name = stream.read(80);
        this.objectId = stream.readInt32();
        this.parentId = stream.readInt32();
        this.flags = stream.readUint32();
        this.readAnimations(stream, size - 96);
    }
    writeMdx(stream) {
        stream.writeUint32(this.getGenericByteLength());
        stream.skip(80 - stream.write(this.name));
        stream.writeInt32(this.objectId);
        stream.writeInt32(this.parentId);
        stream.writeUint32(this.flags);
        for (const animation of this.eachAnimation(true)) {
            animation.writeMdx(stream);
        }
    }
    writeNonGenericAnimationChunks(stream) {
        for (const animation of this.eachAnimation(false)) {
            animation.writeMdx(stream);
        }
    }
    *readGenericBlock(stream) {
        this.name = stream.read();
        for (let token of this.readAnimatedBlock(stream)) {
            if (token === 'ObjectId') {
                this.objectId = stream.readInt();
            }
            else if (token === 'Parent') {
                this.parentId = stream.readInt();
            }
            else if (token === 'BillboardedLockZ') {
                this.flags |= 64 /* BillboardedLockZ */;
            }
            else if (token === 'BillboardedLockY') {
                this.flags |= 32 /* BillboardedLockY */;
            }
            else if (token === 'BillboardedLockX') {
                this.flags |= 16 /* BillboardedLockX */;
            }
            else if (token === 'Billboarded') {
                this.flags |= 8 /* Billboarded */;
            }
            else if (token === 'CameraAnchored') {
                this.flags |= 128 /* CameraAnchored */;
            }
            else if (token === 'DontInherit') {
                for (token of stream.readBlock()) {
                    if (token === 'Rotation') {
                        this.flags |= 4 /* DontInheritRotation */;
                    }
                    else if (token === 'Translation') {
                        this.flags |= 1 /* DontInheritTranslation */;
                    }
                    else if (token === 'Scaling') {
                        this.flags |= 2 /* DontInheritScaling */;
                    }
                }
            }
            else if (token === 'Translation') {
                this.readAnimation(stream, 'KGTR');
            }
            else if (token === 'Rotation') {
                this.readAnimation(stream, 'KGRT');
            }
            else if (token === 'Scaling') {
                this.readAnimation(stream, 'KGSC');
            }
            else {
                yield token;
            }
        }
    }
    writeGenericHeader(stream) {
        stream.writeNumberAttrib('ObjectId', this.objectId);
        if (this.parentId !== -1) {
            stream.writeNumberAttrib('Parent', this.parentId);
        }
        if (this.flags & 64 /* BillboardedLockZ */) {
            stream.writeFlag('BillboardedLockZ');
        }
        if (this.flags & 32 /* BillboardedLockY */) {
            stream.writeFlag('BillboardedLockY');
        }
        if (this.flags & 16 /* BillboardedLockX */) {
            stream.writeFlag('BillboardedLockX');
        }
        if (this.flags & 8 /* Billboarded */) {
            stream.writeFlag('Billboarded');
        }
        if (this.flags & 128 /* CameraAnchored */) {
            stream.writeFlag('CameraAnchored');
        }
        if (this.flags & 4 /* DontInheritRotation */) {
            stream.writeFlag(`DontInherit { Rotation }`);
        }
        if (this.flags & 1 /* DontInheritTranslation */) {
            stream.writeFlag(`DontInherit { Translation }`);
        }
        if (this.flags & 2 /* DontInheritScaling */) {
            stream.writeFlag(`DontInherit { Scaling }`);
        }
    }
    writeGenericAnimations(stream) {
        this.writeAnimation(stream, 'KGTR');
        this.writeAnimation(stream, 'KGRT');
        this.writeAnimation(stream, 'KGSC');
    }
    /**
     * Allows to easily iterate either the GenericObject animations or the parent object animations.
     */
    *eachAnimation(wantGeneric) {
        for (const animation of this.animations) {
            const name = animation.name;
            const isGeneric = (name === 'KGTR' || name === 'KGRT' || name === 'KGSC');
            if ((wantGeneric && isGeneric) || (!wantGeneric && !isGeneric)) {
                yield animation;
            }
        }
    }
    /**
     * Gets the byte length of the GenericObject part of whatever this object this.
     *
     * This is needed because only the KGTR, KGRT, and KGSC animations actually belong to it.
     */
    getGenericByteLength() {
        let size = 96;
        for (const animation of this.eachAnimation(true)) {
            size += animation.getByteLength();
        }
        return size;
    }
    getByteLength() {
        return 96 + super.getByteLength();
    }
}
exports.default = GenericObject;
//# sourceMappingURL=genericobject.js.map