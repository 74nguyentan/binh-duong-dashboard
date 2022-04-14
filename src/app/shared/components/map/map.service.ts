import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { NbToastrService } from '@nebular/theme';
import { loadModules } from 'esri-loader';

@Injectable()
export class MapService {
  view: __esri.MapView;

  constructor(private toast: NbToastrService) {}
}
