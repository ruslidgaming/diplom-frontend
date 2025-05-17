
import { makeAutoObservable } from "mobx";
import mmrgl, { Map, MapLibreGL } from 'mmr-gl';

export class MapVKModel {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
        this._modelMap = {
            initialZoom: 12,
            initialCenter: [49.106414, 55.796127],
            token: 'RSe0266ce5cca3990591009afbbecaf35c12e6ec656e4a7682eae76b617f3745',
        }
    }

    private _modelMap: MapData;

    get modelMap() {
        return this._modelMap;
    }
}

const mapVKModel = new MapVKModel();
export default mapVKModel;
