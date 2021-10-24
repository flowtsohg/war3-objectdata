"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animatedobject_1 = require("./animatedobject");
/**
 * A camera.
 */
class Camera extends animatedobject_1.default {
    constructor() {
        super(...arguments);
        this.name = '';
        this.position = new Float32Array(3);
        this.fieldOfView = 0;
        this.farClippingPlane = 0;
        this.nearClippingPlane = 0;
        this.targetPosition = new Float32Array(3);
    }
    readMdx(stream) {
        const size = stream.readUint32();
        this.name = stream.read(80);
        stream.readFloat32Array(this.position);
        this.fieldOfView = stream.readFloat32();
        this.farClippingPlane = stream.readFloat32();
        this.nearClippingPlane = stream.readFloat32();
        stream.readFloat32Array(this.targetPosition);
        this.readAnimations(stream, size - 120);
    }
    writeMdx(stream) {
        stream.writeUint32(this.getByteLength());
        stream.skip(80 - stream.write(this.name));
        stream.writeFloat32Array(this.position);
        stream.writeFloat32(this.fieldOfView);
        stream.writeFloat32(this.farClippingPlane);
        stream.writeFloat32(this.nearClippingPlane);
        stream.writeFloat32Array(this.targetPosition);
        this.writeAnimations(stream);
    }
    readMdl(stream) {
        this.name = stream.read();
        for (let token of stream.readBlock()) {
            if (token === 'Position') {
                stream.readVector(this.position);
            }
            else if (token === 'Translation') {
                this.readAnimation(stream, 'KCTR');
            }
            else if (token === 'Rotation') {
                this.readAnimation(stream, 'KCRL');
            }
            else if (token === 'FieldOfView') {
                this.fieldOfView = stream.readFloat();
            }
            else if (token === 'FarClip') {
                this.farClippingPlane = stream.readFloat();
            }
            else if (token === 'NearClip') {
                this.nearClippingPlane = stream.readFloat();
            }
            else if (token === 'Target') {
                for (token of stream.readBlock()) {
                    if (token === 'Position') {
                        stream.readVector(this.targetPosition);
                    }
                    else if (token === 'Translation') {
                        this.readAnimation(stream, 'KTTR');
                    }
                    else {
                        throw new Error(`Unknown token in Camera ${this.name}'s Target: "${token}"`);
                    }
                }
            }
            else {
                throw new Error(`Unknown token in Camera ${this.name}: "${token}"`);
            }
        }
    }
    writeMdl(stream) {
        stream.startObjectBlock('Camera', this.name);
        stream.writeVectorAttrib('Position', this.position);
        this.writeAnimation(stream, 'KCTR');
        this.writeAnimation(stream, 'KCRL');
        stream.writeNumberAttrib('FieldOfView', this.fieldOfView);
        stream.writeNumberAttrib('FarClip', this.farClippingPlane);
        stream.writeNumberAttrib('NearClip', this.nearClippingPlane);
        stream.startBlock('Target');
        stream.writeVectorAttrib('Position', this.targetPosition);
        this.writeAnimation(stream, 'KTTR');
        stream.endBlock();
        stream.endBlock();
    }
    getByteLength() {
        return 120 + super.getByteLength();
    }
}
exports.default = Camera;
//# sourceMappingURL=camera.js.map