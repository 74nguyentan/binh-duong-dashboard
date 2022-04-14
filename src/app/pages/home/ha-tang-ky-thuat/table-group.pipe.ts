import { Pipe, PipeTransform } from '@angular/core';
import lodash from 'lodash';
import { ResponseGetThongKe } from '../../../shared/services/thong-ke/ha-tang-ky-thuat.interface';

@Pipe({
  name: 'tableGroup',
})
export class TableGroupPipe implements PipeTransform {
  transform(
    value: Array<ResponseGetThongKe>,
    geometryType: string,
    sum?: boolean,
    donVi?: boolean
  ) {
    const parsed = value.filter((f) => f.geometryType === geometryType);
    if (sum) {
      return lodash.sumBy(parsed, (a) => a.soLuong);
    }
    if (donVi) {
      return parsed[0].donVi;
    }
    return parsed;
  }
}
