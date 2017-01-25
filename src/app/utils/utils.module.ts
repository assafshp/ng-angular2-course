import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpperPipe } from './upper.pipe';
import { CountByPipe } from './count-by.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UpperPipe, CountByPipe],
  exports     : [UpperPipe, CountByPipe],
  providers   : [UpperPipe] //optional, allow to inject this class
})

export class UtilsModule {


}
