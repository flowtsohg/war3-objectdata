"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animationmap_1 = require("./animationmap");
/**
 * The parent class for all objects that have animated data in them.
 */
class AnimatedObject {
    constructor() {
        this.animations = [];
    }
    readAnimations(stream, size) {
        const end = stream.index + size;
        while (stream.index < end) {
            const name = stream.readBinary(4);
            const animation = new animationmap_1.default[name][1]();
            animation.readMdx(stream, name);
            this.animations.push(animation);
        }
    }
    writeAnimations(stream) {
        for (const animation of this.animations) {
            animation.writeMdx(stream);
        }
    }
    /**
     * A wrapper around readBlock() which merges static tokens.
     * E.g.: static Color
     * This makes the condition blocks in the parent objects linear and simple.
     */
    *readAnimatedBlock(stream) {
        for (const token of stream.readBlock()) {
            if (token === 'static') {
                yield `static ${stream.read()}`;
            }
            else {
                yield token;
            }
        }
    }
    readAnimation(stream, name) {
        const animation = new animationmap_1.default[name][1]();
        animation.readMdl(stream, name);
        this.animations.push(animation);
    }
    writeAnimation(stream, name) {
        for (const animation of this.animations) {
            if (animation.name === name) {
                animation.writeMdl(stream, animationmap_1.default[name][0]);
                return true;
            }
        }
        return false;
    }
    /**
     * AnimatedObject itself doesn't care about versions, however objects that inherit it do.
     */
    getByteLength(_version = 0) {
        let size = 0;
        for (const animation of this.animations) {
            size += animation.getByteLength();
        }
        return size;
    }
}
exports.default = AnimatedObject;
//# sourceMappingURL=animatedobject.js.map