import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortedUser'
})
export class SortedUserPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
