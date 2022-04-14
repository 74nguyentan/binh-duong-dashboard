import { Component, OnInit } from '@angular/core';
import { DoAnQHCTService } from '../do-an-qhct.service';

@Component({
  selector: 'ga-so-luong',
  templateUrl: './so-luong.component.html',
  styleUrls: ['./so-luong.component.css'],
})
export class SoLuongComponent implements OnInit {
  value: { bds: number; qhct: number } = { bds: 0, qhct: 0 };
  constructor(private service: DoAnQHCTService) {}

  ngOnInit() {
    this.service.getSoLuong().subscribe((value) => (this.value = value));
  }
}
