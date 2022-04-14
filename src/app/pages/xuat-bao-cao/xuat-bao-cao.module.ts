import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XuatBaoCaoComponent } from './xuat-bao-cao.component';
import { DialogModule } from '@shared/components/dialog/dialog.module';
import { NbButtonModule, NbCardModule, NbSelectModule, NbTooltipModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [XuatBaoCaoComponent],
  imports: [
    CommonModule,
    DialogModule,
    NbTooltipModule,
    NbCardModule,
    NbButtonModule,
    NbSelectModule,
    FormsModule,
    RouterModule.forChild([
     { path:'',component:XuatBaoCaoComponent }
    ])
  ]
})
export class XuatBaoCaoModule { }
