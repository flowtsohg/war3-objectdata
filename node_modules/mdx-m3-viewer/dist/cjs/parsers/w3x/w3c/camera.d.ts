import BinaryStream from '../../../common/binarystream';
/**
 * A camera.
 */
export default class Camera {
    targetLocation: Float32Array;
    rotation: number;
    angleOfAttack: number;
    distance: number;
    roll: number;
    fieldOfView: number;
    farClippingPlane: number;
    nearClippingPlane: number;
    cinematicName: string;
    /**
     * @since Game version 1.32
     */
    localPitch: number;
    /**
     * @since Game version 1.32
     */
    localYaw: number;
    /**
     * @since Game version 1.32
     */
    localRoll: number;
    load(stream: BinaryStream, buildVersion: number): void;
    save(stream: BinaryStream, buildVersion: number): void;
    getByteLength(buildVersion: number): number;
}
