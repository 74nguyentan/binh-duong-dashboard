export interface DoAnEntity {
  maDoAn: string;
  tenDoAn: string;
  quyHoachChiTiet: QuyHoachChiTietEntity;
  shape:__esri.Polygon;
}

export interface QuyHoachChiTietEntity {
  maQHCT: string;
  maLoaiQHCT: string;
}
