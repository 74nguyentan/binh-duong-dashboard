import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ga-hien-trang-htkt',
  templateUrl: './hien-trang-htkt.component.html',
  styleUrls: ['./hien-trang-htkt.component.css'],
})
export class HienTrangHtktComponent implements OnInit {
  tabs = [
    // { title: 'Tổng quan', route: './tong-quan' },
    { title: 'Công trình xây dựng', route: './cong-trinh-xay-dung' },
    { title: 'Giao thông', route: './giao-thong' },
    { title: 'Hệ thống cấp điện trung hạ thế', route: './cap-dien' },
    { title: 'Cây xanh', route: './cay-xanh' },
    { title: 'Chiếu sáng', route: './chieu-sang' },
    { title: 'Thoát nước', route: './thoat-nuoc' },
    { title: 'Viễn thông', route: './vien-thong' },
    { title: 'Môi trường đô thị', route: './moi-truong-do-thi' },
    { title: 'Cấp nước', route: './cap-nuoc' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
