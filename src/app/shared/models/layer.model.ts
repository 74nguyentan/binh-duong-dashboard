import { DatasetModel } from './dataset.model';

export interface LayerModel {
    layerId?: string;
    layerName?: string;
    datasetId?: string;
    dataset?: DatasetModel
}
