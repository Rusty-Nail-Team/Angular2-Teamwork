import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortedAdventure'
})
export class SortedAdventurePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
