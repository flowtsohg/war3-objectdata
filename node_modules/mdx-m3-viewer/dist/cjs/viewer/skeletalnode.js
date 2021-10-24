"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSkeletalNodes = exports.SkeletalNode = void 0;
const gl_matrix_1 = require("gl-matrix");
const gl_matrix_addon_1 = require("../common/gl-matrix-addon");
const locationHeap = gl_matrix_1.vec3.create();
const rotationHeap = gl_matrix_1.quat.create();
const scalingHeap = gl_matrix_1.vec3.create();
const cameraRayHeap = gl_matrix_1.vec3.create();
const rotationHeap2 = gl_matrix_1.quat.create();
/**
 * A skeletal node used for skeletons.
 *
 * Expected to be created with createSkeletalNodes() below.
 */
class SkeletalNode {
    constructor(pivot, localLocation, localRotation, localScale, worldLocation, worldRotation, worldScale, inverseWorldLocation, inverseWorldRotation, inverseWorldScale, localMatrix, worldMatrix) {
        this.dontInheritTranslation = false;
        this.dontInheritRotation = false;
        this.dontInheritScaling = false;
        this.billboarded = false;
        this.billboardedX = false;
        this.billboardedY = false;
        this.billboardedZ = false;
        this.dirty = true;
        this.wasDirty = false;
        this.parent = null;
        this.children = [];
        /**
         * The object associated with this node, if there is any.
         */
        this.object = null;
        this.pivot = pivot;
        this.localLocation = localLocation;
        this.localRotation = localRotation;
        this.localScale = localScale;
        this.worldLocation = worldLocation;
        this.worldRotation = worldRotation;
        this.worldScale = worldScale;
        this.inverseWorldLocation = inverseWorldLocation;
        this.inverseWorldRotation = inverseWorldRotation;
        this.inverseWorldScale = inverseWorldScale;
        this.localMatrix = localMatrix;
        this.worldMatrix = worldMatrix;
        this.localRotation[3] = 1;
        this.localScale.fill(1);
        this.localMatrix[0] = 1;
        this.localMatrix[5] = 1;
        this.localMatrix[10] = 1;
        this.localMatrix[15] = 1;
    }
    /**
     * Recalculate this skeletal node.
     */
    recalculateTransformation(instance) {
        const scene = instance.scene;
        const localMatrix = this.localMatrix;
        const localLocation = this.localLocation;
        const localRotation = this.localRotation;
        const localScale = this.localScale;
        const worldMatrix = this.worldMatrix;
        const worldLocation = this.worldLocation;
        const worldRotation = this.worldRotation;
        const worldScale = this.worldScale;
        const pivot = this.pivot;
        const inverseWorldLocation = this.inverseWorldLocation;
        const inverseWorldRotation = this.inverseWorldRotation;
        const inverseWorldScale = this.inverseWorldScale;
        const parent = this.parent;
        let computedLocation;
        let computedRotation;
        let computedScaling;
        if (this.dontInheritTranslation) {
            gl_matrix_1.vec3.add(locationHeap, parent.inverseWorldLocation, worldLocation);
            computedLocation = gl_matrix_1.vec3.add(locationHeap, locationHeap, localLocation);
        }
        else {
            computedLocation = localLocation;
        }
        if (this.dontInheritScaling) {
            gl_matrix_1.vec3.mul(locationHeap, parent.inverseWorldScale, instance.worldScale);
            computedScaling = gl_matrix_1.vec3.mul(locationHeap, locationHeap, localScale);
        }
        else {
            computedScaling = localScale;
        }
        if (this.billboarded) {
            computedRotation = rotationHeap;
            gl_matrix_1.quat.copy(computedRotation, parent.inverseWorldRotation);
            gl_matrix_1.quat.mul(computedRotation, computedRotation, scene.camera.inverseRotation);
            this.convertBasis(computedRotation);
            gl_matrix_1.quat.mul(computedRotation, computedRotation, localRotation);
        }
        else {
            const { billboardedX, billboardedY, billboardedZ } = this;
            if (billboardedX || billboardedY || billboardedZ) {
                if (billboardedX) {
                    if (computedScaling === localScale) {
                        computedScaling = scalingHeap;
                        gl_matrix_1.vec3.copy(computedScaling, localScale);
                    }
                    // (Original comment from Retera's Warsmash)
                    // It took me many hours to deduce from playing around that this negative one
                    // multiplier should be here. I suggest a lot of testing before you remove it.
                    computedScaling[2] *= -1;
                }
                // Inverse that local rotation
                rotationHeap2[0] = -localRotation[0];
                rotationHeap2[1] = -localRotation[1];
                rotationHeap2[2] = -localRotation[2];
                gl_matrix_1.quat.mul(rotationHeap2, rotationHeap2, parent.inverseWorldRotation);
                gl_matrix_1.vec3.transformQuat(cameraRayHeap, scene.camera.billboardedVectors[6], rotationHeap2);
                if (billboardedX) {
                    gl_matrix_1.quat.setAxisAngle(rotationHeap2, gl_matrix_addon_1.VEC3_UNIT_X, Math.atan2(cameraRayHeap[2], cameraRayHeap[1]));
                }
                else if (billboardedY) {
                    gl_matrix_1.quat.setAxisAngle(rotationHeap2, gl_matrix_addon_1.VEC3_UNIT_Y, Math.atan2(-cameraRayHeap[2], cameraRayHeap[0]));
                }
                else {
                    gl_matrix_1.quat.setAxisAngle(rotationHeap2, gl_matrix_addon_1.VEC3_UNIT_Z, Math.atan2(cameraRayHeap[1], cameraRayHeap[0]));
                }
                computedRotation = rotationHeap;
                gl_matrix_1.quat.mul(computedRotation, localRotation, rotationHeap2);
            }
            else {
                computedRotation = localRotation;
            }
        }
        if (this.dontInheritRotation) {
            gl_matrix_1.quat.mul(rotationHeap2, parent.inverseWorldRotation, instance.worldRotation);
            computedRotation = gl_matrix_1.quat.mul(rotationHeap, rotationHeap2, computedRotation);
        }
        // Local matrix
        gl_matrix_1.mat4.fromRotationTranslationScaleOrigin(localMatrix, computedRotation, computedLocation, computedScaling, pivot);
        // World matrix
        gl_matrix_1.mat4.mul(worldMatrix, parent.worldMatrix, localMatrix);
        // World location
        // vec3.transformMat4(worldLocation, pivot, worldMatrix);
        const x = pivot[0];
        const y = pivot[1];
        const z = pivot[2];
        worldLocation[0] = worldMatrix[0] * x + worldMatrix[4] * y + worldMatrix[8] * z + worldMatrix[12];
        worldLocation[1] = worldMatrix[1] * x + worldMatrix[5] * y + worldMatrix[9] * z + worldMatrix[13];
        worldLocation[2] = worldMatrix[2] * x + worldMatrix[6] * y + worldMatrix[10] * z + worldMatrix[14];
        // Inverse world location
        inverseWorldLocation[0] = -worldLocation[0];
        inverseWorldLocation[1] = -worldLocation[1];
        inverseWorldLocation[2] = -worldLocation[2];
        // World rotation
        gl_matrix_1.quat.mul(worldRotation, parent.worldRotation, computedRotation);
        // Inverse world rotation
        inverseWorldRotation[0] = -worldRotation[0];
        inverseWorldRotation[1] = -worldRotation[1];
        inverseWorldRotation[2] = -worldRotation[2];
        inverseWorldRotation[3] = worldRotation[3];
        // World scale
        const parentScale = parent.worldScale;
        worldScale[0] = parentScale[0] * computedScaling[0];
        worldScale[1] = parentScale[1] * computedScaling[1];
        worldScale[2] = parentScale[2] * computedScaling[2];
        // Inverse world scale
        inverseWorldScale[0] = 1 / worldScale[0];
        inverseWorldScale[1] = 1 / worldScale[1];
        inverseWorldScale[2] = 1 / worldScale[2];
    }
    /**
     * Allows inherited node classes to run extra transformations when billboarding.
     *
     * This is needed because the different model formats are in different vector spaces.
     */
    convertBasis(_rotation) {
    }
}
exports.SkeletalNode = SkeletalNode;
const NODE_SHARED_SIZE = 65;
/**
 * Creates an array of skeletal nodes with shared memory.
 *
 * The returned object contains the node array itself, the backing buffer, and all of the different shared arrays.
 */
function createSkeletalNodes(count, Node = SkeletalNode) {
    const data = new Float32Array(count * NODE_SHARED_SIZE);
    const nodes = [];
    let offset = 0;
    const count3 = count * 3;
    const count4 = count * 4;
    const count16 = count * 16;
    const pivots = data.subarray(offset, offset + count3);
    offset += count3;
    const localLocations = data.subarray(offset, offset + count3);
    offset += count3;
    const localRotations = data.subarray(offset, offset + count4);
    offset += count4;
    const localScales = data.subarray(offset, offset + count3);
    offset += count3;
    const worldLocations = data.subarray(offset, offset + count3);
    offset += count3;
    const worldRotations = data.subarray(offset, offset + count4);
    offset += count4;
    const worldScales = data.subarray(offset, offset + count3);
    offset += count3;
    const inverseWorldLocations = data.subarray(offset, offset + count3);
    offset += count3;
    const invereseWorldRotations = data.subarray(offset, offset + count4);
    offset += count4;
    const inverseWorldScales = data.subarray(offset, offset + count3);
    offset += count3;
    const localMatrices = data.subarray(offset, offset + count16);
    offset += count16;
    const worldMatrices = data.subarray(offset, offset + count16);
    for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const i33 = i3 + 3;
        const i4 = i * 4;
        const i44 = i4 + 4;
        const i16 = i * 16;
        const i1616 = i16 + 16;
        nodes[i] = new Node(pivots.subarray(i3, i33), localLocations.subarray(i3, i33), localRotations.subarray(i4, i44), localScales.subarray(i3, i33), worldLocations.subarray(i3, i33), worldRotations.subarray(i4, i44), worldScales.subarray(i3, i33), inverseWorldLocations.subarray(i3, i33), invereseWorldRotations.subarray(i4, i44), inverseWorldScales.subarray(i3, i33), localMatrices.subarray(i16, i1616), worldMatrices.subarray(i16, i1616));
    }
    return {
        data,
        nodes,
        pivots,
        localLocations,
        localRotations,
        localScales,
        worldLocations,
        worldRotations,
        worldScales,
        inverseWorldLocations,
        invereseWorldRotations,
        inverseWorldScales,
        localMatrices,
        worldMatrices,
    };
}
exports.createSkeletalNodes = createSkeletalNodes;
//# sourceMappingURL=skeletalnode.js.map