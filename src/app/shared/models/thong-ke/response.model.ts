import { ChartSingle, ChartMultiple } from './chart-response.model';

export interface ResponseStatistics {
  datas: Array<ChartSingle | ChartMultiple>;
}
