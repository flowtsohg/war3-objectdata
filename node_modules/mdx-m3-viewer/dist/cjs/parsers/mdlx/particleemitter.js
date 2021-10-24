"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genericobject_1 = require("./genericobject");
/**
 * A particle emitter.
 */
class ParticleEmitter extends genericobject_1.default {
    constructor() {
        super(0x1000);
        this.emissionRate = 0;
        this.gravity = 0;
        this.longitude = 0;
        this.latitude = 0;
        this.path = '';
        this.lifeSpan = 0;
        this.speed = 0;
    }
    readMdx(stream) {
        const start = stream.index;
        const size = stream.readUint32();
        super.readMdx(stream);
        this.emissionRate = stream.readFloat32();
        this.gravity = stream.readFloat32();
        this.longitude = stream.readFloat32();
        this.latitude = stream.readFloat32();
        this.path = stream.read(260);
        this.lifeSpan = stream.readFloat32();
        this.speed = stream.readFloat32();
        this.readAnimations(stream, size - (stream.index - start));
    }
    writeMdx(stream) {
        stream.writeUint32(this.getByteLength());
        super.writeMdx(stream);
        stream.writeFloat32(this.emissionRate);
        stream.writeFloat32(this.gravity);
        stream.writeFloat32(this.longitude);
        stream.writeFloat32(this.latitude);
        stream.skip(260 - stream.write(this.path));
        stream.writeFloat32(this.lifeSpan);
        stream.writeFloat32(this.speed);
        this.writeNonGenericAnimationChunks(stream);
    }
    readMdl(stream) {
        for (let token of super.readGenericBlock(stream)) {
            if (token === 'EmitterUsesMDL') {
                this.flags |= 32768 /* EmitterUsesMDL */;
            }
            else if (token === 'EmitterUsesTGA') {
                this.flags |= 65536 /* EmitterUsesTGA */;
            }
            else if (token === 'static EmissionRate') {
                this.emissionRate = stream.readFloat();
            }
            else if (token === 'EmissionRate') {
                this.readAnimation(stream, 'KPEE');
            }
            else if (token === 'static Gravity') {
                this.gravity = stream.readFloat();
            }
            else if (token === 'Gravity') {
                this.readAnimation(stream, 'KPEG');
            }
            else if (token === 'static Longitude') {
                this.longitude = stream.readFloat();
            }
            else if (token === 'Longitude') {
                this.readAnimation(stream, 'KPLN');
            }
            else if (token === 'static Latitude') {
                this.latitude = stream.readFloat();
            }
            else if (token === 'Latitude') {
                this.readAnimation(stream, 'KPLT');
            }
            else if (token === 'Visibility') {
                this.readAnimation(stream, 'KPEV');
            }
            else if (token === 'Particle') {
                for (token of this.readAnimatedBlock(stream)) {
                    if (token === 'static LifeSpan') {
                        this.lifeSpan = stream.readFloat();
                    }
                    else if (token === 'LifeSpan') {
                        this.readAnimation(stream, 'KPEL');
                    }
                    else if (token === 'static InitVelocity') {
                        this.speed = stream.readFloat();
                    }
                    else if (token === 'InitVelocity') {
                        this.readAnimation(stream, 'KPES');
                    }
                    else if (token === 'Path') {
                        this.path = stream.read();
                    }
                }
            }
            else {
                throw new Error(`Unknown token in ParticleEmitter: "${token}"`);
            }
        }
    }
    writeMdl(stream) {
        stream.startObjectBlock('ParticleEmitter', this.name);
        this.writeGenericHeader(stream);
        if (this.flags & 32768 /* EmitterUsesMDL */) {
            stream.writeFlag('EmitterUsesMDL');
        }
        if (this.flags & 65536 /* EmitterUsesTGA */) {
            stream.writeFlag('EmitterUsesTGA');
        }
        if (!this.writeAnimation(stream, 'KPEE')) {
            stream.writeNumberAttrib('static EmissionRate', this.emissionRate);
        }
        if (!this.writeAnimation(stream, 'KPEG')) {
            stream.writeNumberAttrib('static Gravity', this.gravity);
        }
        if (!this.writeAnimation(stream, 'KPLN')) {
            stream.writeNumberAttrib('static Longitude', this.longitude);
        }
        if (!this.writeAnimation(stream, 'KPLT')) {
            stream.writeNumberAttrib('static Latitude', this.latitude);
        }
        this.writeAnimation(stream, 'KPEV');
        stream.startBlock('Particle');
        if (!this.writeAnimation(stream, 'KPEL')) {
            stream.writeNumberAttrib('static LifeSpan', this.lifeSpan);
        }
        if (!this.writeAnimation(stream, 'KPES')) {
            stream.writeNumberAttrib('static InitVelocity', this.speed);
        }
        if ((this.flags & 32768 /* EmitterUsesMDL */) || (this.flags & 65536 /* EmitterUsesTGA */)) {
            stream.writeStringAttrib('Path', this.path);
        }
        stream.endBlock();
        this.writeGenericAnimations(stream);
        stream.endBlock();
    }
    getByteLength() {
        return 288 + super.getByteLength();
    }
}
exports.default = ParticleEmitter;
//# sourceMappingURL=particleemitter.js.map