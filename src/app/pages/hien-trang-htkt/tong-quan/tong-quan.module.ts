import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TongQuanComponent } from './tong-quan.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TongQuanComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TongQuanComponent }]),
  ],
  exports: [TongQuanComponent],
})
export class TongQuanModule {}
