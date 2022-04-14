import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ga-btn-zoom',
  templateUrl: './btn-zoom.component.html',
  styleUrls: ['./btn-zoom.component.css']
})
export class BtnZoomComponent implements OnInit {

  @Input() input: boolean;
  @Output() output = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  zoom() {
    this.output.emit(this.input = !this.input)
  }
}
