export interface ResponseGetThongKe{
    layerName: string;
    soLuong: number;
    lopDuLieu: string;
    donVi: string;
    geometryType:'esriGeomeryPoint'|'esriGeometryPolygon'|'esriGeometryPolyline'
}
