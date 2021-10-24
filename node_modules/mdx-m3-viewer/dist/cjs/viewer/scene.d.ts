import { vec3, vec4 } from 'gl-matrix';
import ModelViewer from './viewer';
import Camera from './camera';
import Grid from './grid';
import ModelInstance from './modelinstance';
import EmittedObjectUpdater from './emittedobjectupdater';
/**
 * A scene.
 *
 * Every scene has its own list of model instances, and its own camera and viewport.
 *
 * In addition, every scene may have its own AudioContext if enableAudio() is called.
 * If audio is enabled, the AudioContext's listener's location will be updated automatically.
 * Note that due to browser policies, this may be done only after user interaction with the web page.
 */
export default class Scene {
    viewer: ModelViewer;
    camera: Camera;
    grid: Grid;
    visibleCells: number;
    visibleInstances: number;
    updatedParticles: number;
    audioEnabled: boolean;
    audioContext: AudioContext | null;
    instances: ModelInstance[];
    emittedObjectUpdater: EmittedObjectUpdater;
    /**
     * Similar to WebGL's own `alpha` parameter.
     *
     * If false, the scene will be cleared before rendering, meaning that scenes behind it won't be visible through it.
     *
     * If true, alpha works as usual.
     */
    alpha: boolean;
    /**
     * The scene's background color.
     *
     * Only used if `alpha` is false.
     */
    color: vec3;
    /**
     * The area on the canvas in which this scene is rendered.
     *
     * Defaults to the entire canvas.
     *
     * The vector defines [x, y, width, height], sizes are in pixels, and everything is related to the bottom left corner of the canvas.
     */
    viewport: vec4;
    /**
     * The position of the light that is used when rendering.
     *
     * Affects HD MDX and M3 models.
     */
    lightPosition: vec3;
    constructor(viewer: ModelViewer);
    /**
     * Creates an AudioContext if one wasn't created already, and resumes it if needed.
     *
     * The returned promise will resolve to whether it is actually running or not.
     *
     * It may stay in suspended state indefinitly until the user interacts with the page, due to browser policies.
     */
    enableAudio(): Promise<boolean>;
    /**
     * Suspend the audio context.
     */
    disableAudio(): void;
    /**
     * Sets the scene of the given instance.
     *
     * Equivalent to instance.setScene(scene).
     */
    addInstance(instance: ModelInstance): boolean;
    /**
     * Remove the given instance from this scene.
     *
     * Equivalent to ModelInstance.detach().
     */
    removeInstance(instance: ModelInstance): boolean;
    /**
     * Clear this scene.
     */
    clear(): void;
    /**
     * Detach this scene from the viewer.
     *
     * Equivalent to viewer.removeScene(scene).
     */
    detach(): boolean;
    /**
     * Update this scene.
     */
    update(dt: number): void;
    renderInstance(instance: ModelInstance): void;
    /**
     * Use the scene's viewport.
     *
     * Should be called before `renderOpaque()` and `renderTranslucent()`.
     *
     * Called automatically by `render()`.
     */
    startFrame(): void;
    /**
     * Render opaque things in this scene.
     *
     * They are rendered front to back.
     */
    renderOpaque(): void;
    /**
     * Renders translucent things in this scene.
     *
     * They are rendered back to front.
     */
    renderTranslucent(): void;
    /**
     * Render this scene.
     */
    render(): void;
    /**
     * Clear all of the emitted objects in this scene.
     */
    clearEmittedObjects(): void;
}
