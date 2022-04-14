import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HaTangKyThuatComponent } from './ha-tang-ky-thuat.component';
import { BarChartModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';
import { TableGroupPipe } from './table-group.pipe';
import { SharedNebularModule } from '../../../shared/nebular.module';



@NgModule({
  declarations: [HaTangKyThuatComponent,TableGroupPipe],
  imports: [
    CommonModule,
    BarChartModule,
    SharedNebularModule,
    FormsModule
  ],
  exports:[HaTangKyThuatComponent]
})
export class HaTangKyThuatModule { }
