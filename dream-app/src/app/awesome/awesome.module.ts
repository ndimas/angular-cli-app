import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LowercasePipe } from './lowercase.pipe';



@NgModule({
  declarations: [LowercasePipe],
  imports: [
    CommonModule
  ]
})
export class AwesomeModule { }
