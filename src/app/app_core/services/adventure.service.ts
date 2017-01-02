import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseService } from './base.service';

import { AdventureCreateModel } from './../models/adventure-create.model';

@Injectable()
export class AdventureService {
  private adveturesUrl: string;

  constructor(private data: BaseService) {
    this.adveturesUrl = '/data/Adventures';
  }

  getAllAdventures(): Observable<any> {
    return this.data.get(this.adveturesUrl);
  }

  getAdventureById(id: string): Observable<any> {
    return this.data.get(this.adveturesUrl + '/' + id);
  }

  createAdventure(adventure: AdventureCreateModel): Observable<any> {
    return this.data.post(this.adveturesUrl, adventure);
  }

}
