export interface QuanHuyenEntity {
    maQuanHuyen: string;
    tenQuanHuyen: string;
    loaiDoThi: number;
    phuongXas: PhuongXaEntity[];
}

export interface PhuongXaEntity {
    maPhuongXa: string;
    tenPhuongXa: string;
    maQuanHuyen: string;
    quanHuyen: QuanHuyenEntity;
}