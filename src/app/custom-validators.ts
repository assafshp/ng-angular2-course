
import {AbstractControl} from "@angular/forms";

export class CustomValidators{

  static noSpace(control: AbstractControl){
    if(control.value.indexOf(' ') >= 0){
      return {
        hasSpace: true
      }
    }
    return null; //valid
  }

  //valid for also checking async operations, for example check something on the server


  static noAssaf(control: AbstractControl){
    if(control.value.indexOf('Assaf') != -1){
      return {
        hasAssaf: true
      }
    }
    return null; //valid
  }


}
