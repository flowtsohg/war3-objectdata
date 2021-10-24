"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animatedobject_1 = require("./animatedobject");
// These two functions are needed because I am using const enums, which lets TS completely remove them from the output.
// I think it's worth it for the price of these two functions that effectively were always here either way.
function stringToMode(s) {
    if (s === 'None')
        return 0 /* None */;
    if (s === 'Transparent')
        return 1 /* Transparent */;
    if (s === 'Blend')
        return 2 /* Blend */;
    if (s === 'Additive')
        return 3 /* Additive */;
    if (s === 'AddAlpha')
        return 4 /* AddAlpha */;
    if (s === 'Modulate')
        return 5 /* Modulate */;
    if (s === 'Modulate2x')
        return 6 /* Modulate2x */;
    return 0 /* None */;
}
function modeToString(m) {
    if (m === 0 /* None */)
        return 'None';
    if (m === 1 /* Transparent */)
        return 'Transparent';
    if (m === 2 /* Blend */)
        return 'Blend';
    if (m === 3 /* Additive */)
        return 'Additive';
    if (m === 4 /* AddAlpha */)
        return 'AddAlpha';
    if (m === 5 /* Modulate */)
        return 'Modulate';
    if (m === 6 /* Modulate2x */)
        return 'Modulate2x';
    return 'None';
}
/**
 * A layer.
 */
class Layer extends animatedobject_1.default {
    constructor() {
        super(...arguments);
        this.filterMode = 0 /* None */;
        this.flags = 0 /* None */;
        this.textureId = -1;
        this.textureAnimationId = -1;
        this.coordId = 0;
        this.alpha = 1;
        /**
         * @since 900
         */
        this.emissiveGain = 1;
        /**
         * @since 1000
         */
        this.fresnelColor = new Float32Array([1, 1, 1]);
        /**
         * @since 1000
         */
        this.fresnelOpacity = 0;
        /**
         * @since 1000
         */
        this.fresnelTeamColor = 0;
    }
    readMdx(stream, version) {
        const start = stream.index;
        const size = stream.readUint32();
        this.filterMode = stream.readUint32();
        this.flags = stream.readUint32();
        this.textureId = stream.readInt32();
        this.textureAnimationId = stream.readInt32();
        this.coordId = stream.readUint32();
        this.alpha = stream.readFloat32();
        // Note that even though these fields were introduced in versions 900 and 1000 separately, the game does not offer backwards compatibility.
        if (version > 800) {
            this.emissiveGain = stream.readFloat32();
            stream.readFloat32Array(this.fresnelColor);
            this.fresnelOpacity = stream.readFloat32();
            this.fresnelTeamColor = stream.readFloat32();
        }
        this.readAnimations(stream, size - (stream.index - start));
    }
    writeMdx(stream, version) {
        stream.writeUint32(this.getByteLength(version));
        stream.writeUint32(this.filterMode);
        stream.writeUint32(this.flags);
        stream.writeInt32(this.textureId);
        stream.writeInt32(this.textureAnimationId);
        stream.writeUint32(this.coordId);
        stream.writeFloat32(this.alpha);
        // See note above in readMdx.
        if (version > 800) {
            stream.writeFloat32(this.emissiveGain);
            stream.writeFloat32Array(this.fresnelColor);
            stream.writeFloat32(this.fresnelOpacity);
            stream.writeFloat32(this.fresnelTeamColor);
        }
        this.writeAnimations(stream);
    }
    readMdl(stream) {
        for (const token of super.readAnimatedBlock(stream)) {
            if (token === 'FilterMode') {
                this.filterMode = stringToMode(stream.read());
            }
            else if (token === 'Unshaded') {
                this.flags |= 1 /* Unshaded */;
            }
            else if (token === 'SphereEnvMap') {
                this.flags |= 2 /* SphereEnvMap */;
            }
            else if (token === 'TwoSided') {
                this.flags |= 16 /* TwoSided */;
            }
            else if (token === 'Unfogged') {
                this.flags |= 32 /* Unfogged */;
            }
            else if (token === 'NoDepthTest') {
                this.flags |= 64 /* NoDepthTest */;
            }
            else if (token === 'NoDepthSet') {
                this.flags |= 128 /* NoDepthSet */;
            }
            else if (token === 'Unlit') {
                this.flags |= 256 /* Unlit */;
            }
            else if (token === 'static TextureID') {
                this.textureId = stream.readInt();
            }
            else if (token === 'TextureID') {
                this.readAnimation(stream, 'KMTF');
            }
            else if (token === 'TVertexAnimId') {
                this.textureAnimationId = stream.readInt();
            }
            else if (token === 'CoordId') {
                this.coordId = stream.readInt();
            }
            else if (token === 'static Alpha') {
                this.alpha = stream.readFloat();
            }
            else if (token === 'Alpha') {
                this.readAnimation(stream, 'KMTA');
            }
            else if (token === 'static EmissiveGain') {
                this.emissiveGain = stream.readFloat();
            }
            else if (token === 'EmissiveGain') {
                this.readAnimation(stream, 'KMTE');
            }
            else if (token === 'static FresnelColor') {
                stream.readVector(this.fresnelColor);
            }
            else if (token === 'FresnelColor') {
                this.readAnimation(stream, 'KFC3');
            }
            else if (token === 'static FresnelOpacity') {
                this.fresnelOpacity = stream.readFloat();
            }
            else if (token === 'FresnelOpacity') {
                this.readAnimation(stream, 'KFCA');
            }
            else if (token === 'static FresnelTeamColor') {
                this.fresnelTeamColor = stream.readFloat();
            }
            else if (token === 'FresnelTeamColor') {
                this.readAnimation(stream, 'KFTC');
            }
            else {
                throw new Error(`Unknown token in Layer: "${token}"`);
            }
        }
    }
    writeMdl(stream, version) {
        stream.startBlock('Layer');
        stream.writeFlagAttrib('FilterMode', modeToString(this.filterMode));
        if (this.flags & 1 /* Unshaded */) {
            stream.writeFlag('Unshaded');
        }
        if (this.flags & 2 /* SphereEnvMap */) {
            stream.writeFlag('SphereEnvMap');
        }
        if (this.flags & 16 /* TwoSided */) {
            stream.writeFlag('TwoSided');
        }
        if (this.flags & 32 /* Unfogged */) {
            stream.writeFlag('Unfogged');
        }
        if (this.flags & 64 /* NoDepthTest */) {
            stream.writeFlag('NoDepthTest');
        }
        if (this.flags & 128 /* NoDepthSet */) {
            stream.writeFlag('NoDepthSet');
        }
        if (version > 800) {
            if (this.flags & 256 /* Unlit */) {
                stream.writeFlag('Unlit');
            }
        }
        if (!this.writeAnimation(stream, 'KMTF')) {
            stream.writeNumberAttrib('static TextureID', this.textureId);
        }
        if (this.textureAnimationId !== -1) {
            stream.writeNumberAttrib('TVertexAnimId', this.textureAnimationId);
        }
        if (this.coordId !== 0) {
            stream.writeNumberAttrib('CoordId', this.coordId);
        }
        if (!this.writeAnimation(stream, 'KMTA') && this.alpha !== 1) {
            stream.writeNumberAttrib('static Alpha', this.alpha);
        }
        if (version > 800) {
            if (!this.writeAnimation(stream, 'KMTE') && this.emissiveGain !== 1) {
                stream.writeNumberAttrib('static EmissiveGain', this.emissiveGain);
            }
            if (!this.writeAnimation(stream, 'KFC3') && (this.fresnelColor[0] !== 1 || this.fresnelColor[1] !== 1 || this.fresnelColor[2] !== 1)) {
                stream.writeVectorAttrib('static FresnelColor', this.fresnelColor);
            }
            if (!this.writeAnimation(stream, 'KFCA') && this.fresnelOpacity !== 0) {
                stream.writeNumberAttrib('static FresnelOpacity', this.fresnelOpacity);
            }
            if (!this.writeAnimation(stream, 'KFTC') && this.fresnelTeamColor !== 0) {
                stream.writeNumberAttrib('static FresnelTeamColor', this.fresnelTeamColor);
            }
        }
        stream.endBlock();
    }
    getByteLength(version) {
        let size = 28 + super.getByteLength();
        // See note above in readMdx.
        if (version > 800) {
            size += 24;
        }
        return size;
    }
}
exports.default = Layer;
//# sourceMappingURL=layer.js.map