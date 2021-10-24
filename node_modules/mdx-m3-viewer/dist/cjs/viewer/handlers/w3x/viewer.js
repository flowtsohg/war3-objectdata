"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mappeddata_1 = require("../../../utils/mappeddata");
const viewer_1 = require("../../viewer");
const handler_1 = require("../mdx/handler");
const handler_2 = require("../blp/handler");
const handler_3 = require("../tga/handler");
const handler_4 = require("../dds/handler");
const ground_vert_1 = require("./shaders/ground.vert");
const ground_frag_1 = require("./shaders/ground.frag");
const water_vert_1 = require("./shaders/water.vert");
const water_frag_1 = require("./shaders/water.frag");
const cliffs_vert_1 = require("./shaders/cliffs.vert");
const cliffs_frag_1 = require("./shaders/cliffs.frag");
const map_1 = require("./map");
class War3MapViewer extends viewer_1.default {
    constructor(canvas, wc3PathSolver, isReforged) {
        super(canvas);
        this.terrainData = new mappeddata_1.MappedData();
        this.cliffTypesData = new mappeddata_1.MappedData();
        this.waterData = new mappeddata_1.MappedData();
        this.doodadsData = new mappeddata_1.MappedData();
        this.doodadMetaData = new mappeddata_1.MappedData();
        this.destructableMetaData = new mappeddata_1.MappedData();
        this.unitsData = new mappeddata_1.MappedData();
        this.unitMetaData = new mappeddata_1.MappedData();
        this.loadedBaseFiles = false;
        this.map = null;
        const webgl = this.webgl;
        // Data textures.
        if (!webgl.ensureExtension('OES_texture_float')) {
            throw new Error('War3MapViewer: No float texture support!');
        }
        // Optionally used for cliff renering.
        if (!webgl.ensureExtension('OES_vertex_array_object')) {
            console.warn('War3MapViewer: No vertex array object support! This might reduce performance.');
        }
        this.on('error', (e) => console.log(e));
        this.addHandler(handler_1.default, wc3PathSolver, isReforged);
        this.addHandler(handler_2.default);
        this.addHandler(handler_3.default);
        this.addHandler(handler_4.default);
        this.wc3PathSolver = wc3PathSolver;
        this.isReforged = isReforged;
        this.groundShader = this.webgl.createShader(ground_vert_1.default, ground_frag_1.default);
        this.waterShader = this.webgl.createShader(water_vert_1.default, water_frag_1.default);
        this.cliffShader = this.webgl.createShader(cliffs_vert_1.default, cliffs_frag_1.default);
        this.loadBaseFiles();
    }
    async loadBaseFiles() {
        const promises = [
            this.loadBaseFile('TerrainArt\\Terrain.slk', 'text'),
            this.loadBaseFile('TerrainArt\\CliffTypes.slk', 'text'),
            this.loadBaseFile('TerrainArt\\Water.slk', 'text'),
            this.loadBaseFile('Doodads\\Doodads.slk', 'text'),
            this.loadBaseFile('Doodads\\DoodadMetaData.slk', 'text'),
            this.loadBaseFile('Units\\DestructableData.slk', 'text'),
            this.loadBaseFile('Units\\DestructableMetaData.slk', 'text'),
            this.loadBaseFile('Units\\UnitData.slk', 'text'),
            this.loadBaseFile('Units\\unitUI.slk', 'text'),
            this.loadBaseFile('Units\\ItemData.slk', 'text'),
            this.loadBaseFile('Units\\UnitMetaData.slk', 'text'),
        ];
        let reforgedPromises;
        if (this.isReforged) {
            reforgedPromises = [
                this.loadBaseFile('Doodads\\doodadSkins.txt', 'text'),
                this.loadBaseFile('Units\\destructableSkin.txt', 'text'),
                this.loadBaseFile('Units\\unitSkin.txt', 'text'),
                this.loadBaseFile('Units\\itemSkin.txt', 'text'),
            ];
        }
        const [terrain, cliffTypes, water, doodads, doodadMetaData, destructableData, destructableMetaData, unitData, unitUi, itemData, unitMetaData] = await Promise.all(promises);
        if (!terrain || !cliffTypes || !water || !doodads || !doodadMetaData || !destructableData || !destructableMetaData || !unitData || !unitUi || !itemData || !unitMetaData) {
            throw new Error('Failed to load the base files');
        }
        this.terrainData.load(terrain.data);
        this.cliffTypesData.load(cliffTypes.data);
        this.waterData.load(water.data);
        this.doodadsData.load(doodads.data);
        this.doodadMetaData.load(doodadMetaData.data);
        this.doodadsData.load(destructableData.data);
        this.destructableMetaData.load(destructableMetaData.data);
        this.unitsData.load(unitData.data);
        this.unitsData.load(unitUi.data);
        this.unitsData.load(itemData.data);
        this.unitMetaData.load(unitMetaData.data);
        if (reforgedPromises) {
            const [doodadSkins, destructableSkin, unitSkin, itemSkin] = await Promise.all(reforgedPromises);
            if (!doodadSkins || !destructableSkin || !unitSkin || !itemSkin) {
                throw new Error('Failed to load the base Reforged files');
            }
            this.doodadsData.load(doodadSkins.data);
            this.doodadsData.load(destructableSkin.data);
            this.unitsData.load(unitSkin.data);
            this.unitsData.load(itemSkin.data);
        }
        this.loadedBaseFiles = true;
        this.emit('loadedbasefiles');
    }
    loadBaseFile(path, dataType) {
        return super.loadGeneric(this.wc3PathSolver(path), dataType);
    }
    /**
     * Load a map from a buffer.
     */
    loadMap(buffer) {
        if (this.loadedBaseFiles) {
            if (this.map) {
                this.map.die();
            }
            this.map = new map_1.default(this, buffer);
        }
    }
    /**
     * Update the map.
     */
    update() {
        if (this.map) {
            super.update();
            this.map.update();
        }
    }
    /**
     * Render the map.
     */
    render() {
        if (this.map) {
            this.map.render();
        }
    }
}
exports.default = War3MapViewer;
//# sourceMappingURL=viewer.js.map