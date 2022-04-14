import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullscreenElementDirective } from './fullscreen-element.directive';



@NgModule({
  declarations: [FullscreenElementDirective],
  imports: [
    CommonModule
  ], 
  exports:[FullscreenElementDirective]
})
export class FullscreenElementModule { }
