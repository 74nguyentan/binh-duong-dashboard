import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ga-cap-dien',
  templateUrl: './cap-dien.component.html',
  styleUrls: ['./cap-dien.component.scss']
})
export class CapDienComponent implements OnInit {
  zoom_1: boolean = false;
  zoom_2: boolean = false;
  zoom_3: boolean = false;
  zoom_4: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
