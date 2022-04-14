import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectMdssdTdaComponent } from './select-mdssd-tda.component';
import { NbAutocompleteModule, NbInputModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SelectMdssdTdaComponent],
  imports: [
    CommonModule, NbAutocompleteModule, NbInputModule, FormsModule
  ],
  exports: [SelectMdssdTdaComponent]
})
export class SelectMdssdTdaModule { }
