import { ResponseStatistics } from '../../models/thong-ke/response.model';

export interface ResponseGetThongKe extends ResponseStatistics {
    unit: 'm2' | 'ha',
}
