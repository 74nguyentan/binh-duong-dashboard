import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ga-thoat-nuoc',
  templateUrl: './thoat-nuoc.component.html',
  styleUrls: ['./thoat-nuoc.component.scss']
})
export class ThoatNuocComponent implements OnInit {
  zoom_1 : boolean = false;
  zoom_2 : boolean = false;
  zoom_3 : boolean = false;
  zoom_4 : boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
