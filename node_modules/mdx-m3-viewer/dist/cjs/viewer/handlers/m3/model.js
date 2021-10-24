"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../../../parsers/m3/model");
const model_2 = require("../../model");
const standardmaterial_1 = require("./standardmaterial");
const bone_1 = require("./bone");
const sequence_1 = require("./sequence");
const sts_1 = require("./sts");
const stc_1 = require("./stc");
const stg_1 = require("./stg");
const attachment_1 = require("./attachment");
const camera_1 = require("./camera");
const region_1 = require("./region");
const modelinstance_1 = require("./modelinstance");
const batch_1 = require("./batch");
/**
 * An M3 model.
 */
class M3Model extends model_2.default {
    constructor(bufferOrParser, resourceData) {
        super(resourceData);
        this.name = '';
        this.batches = [];
        this.materials = [[], []]; // 2D array for the possibility of adding more material types in the future
        this.materialMaps = [];
        this.bones = [];
        this.sequences = [];
        this.sts = [];
        this.stc = [];
        this.stg = [];
        this.attachments = [];
        this.cameras = [];
        this.regions = [];
        this.initialReference = [];
        this.elementBuffer = null;
        this.arrayBuffer = null;
        this.vertexSize = 0;
        this.uvSetCount = 0;
        let parser;
        if (bufferOrParser instanceof model_1.default) {
            parser = bufferOrParser;
        }
        else {
            parser = new model_1.default();
            parser.load(bufferOrParser);
        }
        const model = parser.model;
        const div = model.divisions.first();
        this.name = model.modelName.get();
        this.setupGeometry(model, div);
        const materialMaps = model.materialReferences.get();
        this.materialMaps = materialMaps;
        // Create concrete material objects for standard materials
        const standardMaterials = model.materials[0].get();
        for (let i = 0, l = standardMaterials.length; i < l; i++) {
            this.materials[1].push(new standardmaterial_1.M3StandardMaterial(this, i, standardMaterials[i]));
        }
        // Create concrete batch objects
        for (const batch of div.batches.get()) {
            const regionId = batch.regionIndex;
            const materialMap = materialMaps[batch.materialReferenceIndex];
            if (materialMap.materialType === 1) {
                this.batches.push(new batch_1.default(this.regions[regionId], this.materials[1][materialMap.materialIndex]));
            }
        }
        /*
        var batchGroups = [[], [], [], [], [], []];
    
        for (i = 0, l = batches.length; i < l; i++) {
        var blendMode = batches[i].material.blendMode;
    
        batchGroups[blendMode].push(batches[i]);
        }
    
        function sortByPriority(a, b) {
        var a = a.material.priority;
        var b = b.material.priority;
    
        if (a < b) {
        return 1;
        } else if (a == b) {
        return 0;
        } else {
        return -1;
        }
        }
    
        for (i = 0; i < 6; i++) {
        batchGroups[i].sort(sortByPriority);
        }
        */
        /*
        // In the EggPortrait model the batches seem to be sorted by blend mode. Is this true for every model?
        this.batches.sort(function (a, b) {
        var ba = a.material.blendMode;
        var bb = b.material.blendMode;
    
        if (ba < bb) {
        return -1;
        } else if (ba == bb) {
        return 0;
        } else {
        return 1;
        }
        });
        */
        // this.batches = batchGroups[0].concat(batchGroups[1]).concat(batchGroups[2]).concat(batchGroups[3]).concat(batchGroups[4]).concat(batchGroups[5]);
        this.initialReference = model.absoluteInverseBoneRestPositions.get();
        for (const bone of model.bones.get()) {
            this.bones.push(new bone_1.default(bone));
        }
        this.boneLookup = model.boneLookup.get();
        const sequences = model.sequences.get();
        if (sequences) {
            for (const sequence of sequences) {
                this.sequences.push(new sequence_1.default(sequence));
            }
        }
        const stss = model.sts.get();
        if (stss) {
            for (const sts of stss) {
                this.sts.push(new sts_1.default(sts));
            }
        }
        const stcs = model.stc.get();
        if (stcs) {
            for (const stc of stcs) {
                this.stc.push(new stc_1.default(stc));
            }
        }
        const stgs = model.stg.get();
        if (stgs) {
            for (const stg of stgs) {
                this.stg.push(new stg_1.default(stg, this.sts, this.stc));
            }
        }
        this.addGlobalAnims();
        /*
        if (parser.fuzzyHitTestObjects.length > 0) {
            for (i = 0, l = parser.fuzzyHitTestObjects.length; i < l; i++) {
                this.boundingShapes[i] = new M3BoundingShape(parser.fuzzyHitTestObjects[i], parser.bones, gl);
            }
        }
        */
        /*
        if (parser.particleEmitters.length > 0) {
        this.particleEmitters = [];
     
        for (i = 0, l = parser.particleEmitters.length; i < l; i++) {
        this.particleEmitters[i] = new M3ParticleEmitter(parser.particleEmitters[i], this);
        }
        }
        */
        const attachmentPoints = model.attachmentPoints.get();
        if (attachmentPoints) {
            for (const attachment of attachmentPoints) {
                this.attachments.push(new attachment_1.default(attachment));
            }
        }
        const cameras = model.cameras.get();
        if (cameras) {
            for (const camera of cameras) {
                this.cameras.push(new camera_1.default(camera));
            }
        }
    }
    addInstance() {
        return new modelinstance_1.default(this);
    }
    setupGeometry(parser, div) {
        const gl = this.viewer.gl;
        let uvSetCount = 1;
        const vertexFlags = parser.vertexFlags;
        if (vertexFlags & 0x40000) {
            uvSetCount = 2;
        }
        else if (vertexFlags & 0x80000) {
            uvSetCount = 3;
        }
        else if (vertexFlags & 0x100000) {
            uvSetCount = 4;
        }
        const regions = div.regions.get();
        let totalElements = 0;
        const offsets = [];
        for (let i = 0, l = regions.length; i < l; i++) {
            offsets[i] = totalElements;
            totalElements += regions[i].triangleIndicesCount;
        }
        const elementArray = new Uint16Array(totalElements);
        const triangles = div.triangles.get();
        for (let i = 0, l = regions.length; i < l; i++) {
            this.regions.push(new region_1.default(this, regions[i], triangles, elementArray, offsets[i]));
        }
        const vertices = parser.vertices.get();
        this.elementBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.elementBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, elementArray, gl.STATIC_DRAW);
        const arrayBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, arrayBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
        this.arrayBuffer = arrayBuffer;
        this.vertexSize = (7 + uvSetCount) * 4;
        this.uvSetCount = uvSetCount;
    }
    mapMaterial(index) {
        const materialMap = this.materialMaps[index];
        // return this.materials[materialMap.materialType][materialMap.materialIndex];
        return this.materials[1][materialMap.materialIndex];
    }
    addGlobalAnims() {
        /*
        var i, l;
        var glbirth, glstand, gldeath;
        var stgs = this.stg;
        var stg, name;
     
        for (i = 0, l = stgs.length; i < l; i++) {
        stg = stgs[i];
        name = stg.name.toLowerCase(); // Because obviously there will be a wrong case in some model...
     
        if (name === 'glbirth') {
        glbirth = stg;
        } else if (name === 'glstand') {
        glstand = stg;
        } else if (name === 'gldeath') {
        gldeath = stg;
        }
        }
     
        for (i = 0, l = stgs.length; i < l; i++) {
        stg = stgs[i];
        name = stg.name.toLowerCase(); // Because obviously there will be a wrong case in some model...
     
        if (name !== 'glbirth' && name !== 'glstand' && name !== 'gldeath') {
        if (name.indexOf('birth') !== -1 && glbirth) {
        stg.stcIndices = stg.stcIndices.concat(glbirth.stcIndices);
        } else  if (name.indexOf('death') !== -1 && gldeath) {
        stg.stcIndices = stg.stcIndices.concat(gldeath.stcIndices);
        } else if (glstand) {
        stg.stcIndices = stg.stcIndices.concat(glstand.stcIndices);
        }
        }
        }
        */
    }
}
exports.default = M3Model;
//# sourceMappingURL=model.js.map