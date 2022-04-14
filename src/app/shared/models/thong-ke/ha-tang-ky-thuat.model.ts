import { LayerModel } from '../layer.model';

export enum HaTangKyThuatPhanLoai {
    HienTrang = 'HienTrang',
    PhanKhuNongThonMoi = 'QHPK',
    ChiTiet = 'QHCT',
    ChungTinh = 'QHC_Tinh',
    ChungDoThi = 'QHC'
}

export interface HaTangKyThuatModel {
    id?: string;
    linhVuc?: string;
    lopDuLieu?: string;
    chieuDai?: number;
    soLuong?: number;
    dienTich?: number;
    phanLoai?: HaTangKyThuatPhanLoai;
    quanHuyen?: string;
    layer?:LayerModel;
}