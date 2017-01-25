import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countBy',
  pure: false //run always (every change detection) - bad practice, it is better to create new reference
})
export class CountByPipe implements PipeTransform {

  /**
   *
   * @param value
   * @param key
   * @param prop
   * @returns {null}
   */
  transform(value: any[], key:string, prop: any): number {

    return value.filter(item => item[key] === prop).length;
  }

}
