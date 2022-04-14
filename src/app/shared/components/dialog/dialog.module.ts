import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbButtonModule } from '@nebular/theme';
import {
  DialogComponent,
  DialogHeaderComponent,
  DialogFooterComponent,
  DialogBodyComponent,
} from './dialog.component';
const components = [
  DialogComponent,
  DialogHeaderComponent,
  DialogFooterComponent,
  DialogBodyComponent,
];
@NgModule({
  imports: [CommonModule, NbCardModule, NbButtonModule],
  declarations: components,
  exports: components,
})
export class DialogModule {}
