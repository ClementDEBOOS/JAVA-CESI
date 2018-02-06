import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'orderby'})
export class OrderByPipe implements PipeTransform {
  transform(array: Array<string>, student): Array<string> {

    array.sort(
      (a: any, b: any) => {
      if (a[student] < b[student]) {
        return -1;
      } else if (a[student] > b[student]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
