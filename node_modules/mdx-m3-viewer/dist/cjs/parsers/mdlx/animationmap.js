"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animations_1 = require("./animations");
// A map from MDX animation tags to their equivalent MDL tokens, and the implementation objects.
exports.default = {
    // Layer
    KMTF: ['TextureID', animations_1.UintAnimation],
    KMTA: ['Alpha', animations_1.FloatAnimation],
    KMTE: ['EmissiveGain', animations_1.FloatAnimation],
    KFC3: ['FresnelColor', animations_1.Vector3Animation],
    KFCA: ['FresnelOpacity', animations_1.FloatAnimation],
    KFTC: ['FresnelTeamColor', animations_1.UintAnimation],
    // TextureAnimation
    KTAT: ['Translation', animations_1.Vector3Animation],
    KTAR: ['Rotation', animations_1.Vector4Animation],
    KTAS: ['Scaling', animations_1.Vector3Animation],
    // GeosetAnimation
    KGAO: ['Alpha', animations_1.FloatAnimation],
    KGAC: ['Color', animations_1.Vector3Animation],
    // GenericObject
    KGTR: ['Translation', animations_1.Vector3Animation],
    KGRT: ['Rotation', animations_1.Vector4Animation],
    KGSC: ['Scaling', animations_1.Vector3Animation],
    // Light
    KLAS: ['AttenuationStart', animations_1.FloatAnimation],
    KLAE: ['AttenuationEnd', animations_1.FloatAnimation],
    KLAC: ['Color', animations_1.Vector3Animation],
    KLAI: ['Intensity', animations_1.FloatAnimation],
    KLBI: ['AmbIntensity', animations_1.FloatAnimation],
    KLBC: ['AmbColor', animations_1.Vector3Animation],
    KLAV: ['Visibility', animations_1.FloatAnimation],
    // Attachment
    KATV: ['Visibility', animations_1.FloatAnimation],
    // ParticleEmitter
    KPEE: ['EmissionRate', animations_1.FloatAnimation],
    KPEG: ['Gravity', animations_1.FloatAnimation],
    KPLN: ['Longitude', animations_1.FloatAnimation],
    KPLT: ['Latitude', animations_1.FloatAnimation],
    KPEL: ['LifeSpan', animations_1.FloatAnimation],
    KPES: ['InitVelocity', animations_1.FloatAnimation],
    KPEV: ['Visibility', animations_1.FloatAnimation],
    // ParticleEmitter2
    KP2S: ['Speed', animations_1.FloatAnimation],
    KP2R: ['Variation', animations_1.FloatAnimation],
    KP2L: ['Latitude', animations_1.FloatAnimation],
    KP2G: ['Gravity', animations_1.FloatAnimation],
    KP2E: ['EmissionRate', animations_1.FloatAnimation],
    KP2N: ['Width', animations_1.FloatAnimation],
    KP2W: ['Length', animations_1.FloatAnimation],
    KP2V: ['Visibility', animations_1.FloatAnimation],
    // ParticleEmitterCorn
    KPPA: ['Alpha', animations_1.FloatAnimation],
    KPPC: ['Color', animations_1.Vector3Animation],
    KPPE: ['EmissionRate', animations_1.FloatAnimation],
    KPPL: ['LifeSpan', animations_1.FloatAnimation],
    KPPS: ['Speed', animations_1.FloatAnimation],
    KPPV: ['Visibility', animations_1.FloatAnimation],
    // RibbonEmitter
    KRHA: ['HeightAbove', animations_1.FloatAnimation],
    KRHB: ['HeightBelow', animations_1.FloatAnimation],
    KRAL: ['Alpha', animations_1.FloatAnimation],
    KRCO: ['Color', animations_1.Vector3Animation],
    KRTX: ['TextureSlot', animations_1.UintAnimation],
    KRVS: ['Visibility', animations_1.FloatAnimation],
    // Camera
    KCTR: ['Translation', animations_1.Vector3Animation],
    KTTR: ['Translation', animations_1.Vector3Animation],
    KCRL: ['Rotation', animations_1.FloatAnimation],
};
//# sourceMappingURL=animationmap.js.map