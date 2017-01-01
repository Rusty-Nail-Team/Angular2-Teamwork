import { Component, OnInit } from '@angular/core';

import { AdventureService } from './../../app_core/services/adventure.service';

import { AdventureHomeModel } from './../../app_core/models/adventure-home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private title: string;
  private errorMessage: string;
  private adventure: AdventureHomeModel;
  
  constructor(private adventureService: AdventureService) {}

  ngOnInit() {
    this.title = 'Home';

    this.getLastAdventure();
  }
  
getLastAdventure() {
    this.adventureService
      .getAllAdventures()
      .subscribe(
      data => {
        let adventures: AdventureHomeModel[] = data.data;
        this.adventure = adventures.sort(this.sortCreatedDesc).pop();
      },
      error => this.errorMessage = <any>error
      );
  }

  private sortCreatedDesc(a: AdventureHomeModel, b: AdventureHomeModel) { 
    return +b.created - +a.created;
}
}
