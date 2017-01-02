import { Component, OnInit } from '@angular/core';

import { AdventureService } from './../../app_core/services/adventure.service';

import { AdventureHomeModel } from './../../app_core/models/adventure-home.model';

@Component({
  selector: 'app-adventures',
  templateUrl: './adventures.component.html',
  styleUrls: ['./adventures.component.css']
})
export class AdventuresComponent implements OnInit {
  private title: string;
  private errorMessage: string;
  private adventures: AdventureHomeModel[];
  private filterText: string;
  private sortingProperties: string[];
  private sortBy: string;
  private orderDesc: string;

  constructor(private adventureService: AdventureService) { }

  ngOnInit() {
    this.title = 'Adventures';
    this.sortingProperties = ['Name', 'Description', 'Created'];
    this.sortBy = 'Name';
    this.orderDesc = 'desc';
    this.getAllAdventures();
  }

  getAllAdventures() {
    this.adventureService
      .getAllAdventures()
      .subscribe(
      data => {
        this.adventures = data.data;
      },
      error => this.errorMessage = <any>error
      );
  }

  onSortChange(ev: any) {
        this.sortBy = ev.target.value;
    }

  onOrderChange(ev: any) {
        this.orderDesc = ev.target.value;
    }
    
  onInput(ev: any) {
        this.filterText = ev.target.value;
    }

}
