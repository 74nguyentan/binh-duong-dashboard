import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ProjectGeometryParams } from './geometry.interface';

@Injectable({ providedIn: 'root' })
export class GeometryService {
  constructor(private http: HttpClient) {}

  project(param: ProjectGeometryParams) {
    return this.http.post<{ geometries: __esri.Geometry[] }>(
      environment.apiUrl + '/services/project',
      JSON.stringify(param),
      {
        headers: {
          'content-type': 'application/json',
        },
      }
    );
  }
}
