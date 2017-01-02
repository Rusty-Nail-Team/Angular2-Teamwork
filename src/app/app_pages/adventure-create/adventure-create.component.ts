import { Component, OnInit } from '@angular/core';

import { AdventureService } from './../../app_core/services/adventure.service';

import { AdventureCreateModel } from './../../app_core/models/adventure-create.model';
import { AdventureDataCreateModel } from './../../app_core/models/adventure-data-create.model';

@Component({
  selector: 'app-adventure-create',
  templateUrl: './adventure-create.component.html',
  styleUrls: ['./adventure-create.component.css']
})
export class AdventureCreateComponent implements OnInit {
  private title: string;
  private model: AdventureCreateModel;
  private modelData: AdventureDataCreateModel[];

  constructor(private adventureService: AdventureService) {
    this.model = new AdventureCreateModel;
  }

  ngOnInit() {
    this.title = 'New Adventure';
  }

  createAdventure() {
    this.adventureService.createAdventure(this.model);
  }

}
