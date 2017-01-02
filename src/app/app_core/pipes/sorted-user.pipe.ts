import { Pipe, PipeTransform } from '@angular/core';

import { UserProfileModel } from './../models/user-profile.model';

@Pipe({
  name: 'sortedUser'
})
export class SortedUserPipe implements PipeTransform {

  transform(items: UserProfileModel[], parameters: any[]): UserProfileModel[] {
    if (!items) {
            return [];
        }

        return items.sort((a, b) => {
            switch (parameters[0]) {
                case 'Email':
                    return parameters[1] === 'false' ?
                        a.email.localeCompare(b.email) :
                        b.email.localeCompare(a.email);
                // case 'Rating':
                //     return parameters[1] === 'asc' ?
                //         + a.create - +b.create :
                //         +b.create - +a.create;
                // case 'Year':
                //     return parameters[1] === 'asc' ?
                //         +a.Year - +b.Year :
                //         +b.Year - +a.Year;
            }
        });
  }

}
