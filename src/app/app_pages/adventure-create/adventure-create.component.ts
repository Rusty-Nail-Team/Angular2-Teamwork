import { Component, OnInit } from '@angular/core';

import { AdventureService } from './../../app_core/services/adventure.service';

import { AdventureCreateModel } from './../../app_core/models/adventure-create.model';

@Component({
  selector: 'app-adventure-create',
  templateUrl: './adventure-create.component.html',
  styleUrls: ['./adventure-create.component.css']
})
export class AdventureCreateComponent implements OnInit {
  private title: string;
  private model: AdventureCreateModel;

  constructor(private adventureService: AdventureService) {
    this.model = new AdventureCreateModel;
  }

  ngOnInit() {
    this.title = 'adventure-create works!';
  }

  create() {
    this.adventureService.createAdventure(this.model);
  }

}
