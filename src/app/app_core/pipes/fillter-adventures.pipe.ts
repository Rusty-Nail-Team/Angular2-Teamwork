import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fillterAdventures'
})
export class FillterAdventuresPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
