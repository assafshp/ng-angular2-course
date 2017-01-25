import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpperPipe } from './upper.pipe';
import { CountByPipe } from './count-by.pipe';
import { MarkerDirective } from './marker.directive';
import { IfDirective } from './if.directive';
import { FocusDirective } from './focus.directive';
import { StorageService} from "./storage.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UpperPipe, CountByPipe, MarkerDirective, IfDirective, FocusDirective],
  exports     : [UpperPipe, CountByPipe, MarkerDirective, IfDirective, FocusDirective],
  providers   : [UpperPipe, StorageService] //optional, allow to inject this class
})

export class UtilsModule {


}
