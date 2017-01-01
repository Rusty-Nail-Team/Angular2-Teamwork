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

  constructor(private adventureService: AdventureService) { }

  ngOnInit() {
    this.title = 'Adventures';

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

}
