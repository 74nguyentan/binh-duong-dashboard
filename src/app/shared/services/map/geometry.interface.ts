export interface ProjectGeometryParams {
  inSR?: __esri.SpatialReference | 102100;
  outSR?: __esri.SpatialReference | 102100;
  geometryType:
    | 'esriGeometryPoint'
    | 'esriGeometryMultipoint'
    | 'esriGeometryPolyline'
    | 'esriGeometryPolygon';
  geometries: Array<__esri.Geometry>;
}
