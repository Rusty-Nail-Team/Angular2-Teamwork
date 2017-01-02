import { Pipe, PipeTransform } from '@angular/core';

import { AdventureCreateModel } from './../models/adventure-create.model';

@Pipe({
  name: 'fillterAdventures'
})
export class FillterAdventuresPipe implements PipeTransform {

  transform(adventures: AdventureCreateModel[], filterValue: string = ''): AdventureCreateModel[] {
    if (!adventures) {
      return;
    }

    if (filterValue === '') {
      return adventures;
    }

    return adventures.filter(adventure =>
      adventure.name.toLocaleLowerCase()
        .indexOf(filterValue) > -1);
  }
}
