// import { Pipe, PipeTransform } from '@angular/core';
//
// @Pipe({
//   name: 'upper'
// })
// export class UpperPipe implements PipeTransform {
//
//   transform(value: any, args?: any): any {
//     return null;
//   }
//
// }

import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
  name:'upper'
})
export class UpperPipe implements PipeTransform{


  public transform(value: string): string {
    return value.toUpperCase();
  }
}
