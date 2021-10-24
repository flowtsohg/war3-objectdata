import JassHandle from './handle';
import JassLocation from './location';
/**
 * type camerasetup
 */
export default class JassCameraSetup extends JassHandle {
    targetDistance: number;
    farZ: number;
    angleOfAttack: number;
    fieldOfView: number;
    roll: number;
    rotation: number;
    zOffset: number;
    destPosition: JassLocation;
}
