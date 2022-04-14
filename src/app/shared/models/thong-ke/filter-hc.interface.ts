import { HttpParams } from '@angular/common/http';

export interface FilterHCParams {
  maQuanHuyens?: string[];
  maPhuongXas?: string[];
}

export const getParams = (params?: FilterHCParams) => {
  if(params)
  return  new HttpParams({
    fromObject: {
      maQuanHuyen: params.maQuanHuyens || [],
      maPhuongXa: params.maPhuongXas || [],
    },
  });
  return new HttpParams();

};
