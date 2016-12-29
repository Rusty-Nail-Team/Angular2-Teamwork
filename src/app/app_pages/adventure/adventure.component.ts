import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AdventureService } from './../../app_core/services/adventure.service';

import { AdventureModel } from './../../app_core/models/adventure.model';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit {
  private errorMessage: string;
  private adventure: AdventureModel;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private adventureService: AdventureService) { }

  ngOnInit() {
    let adventureId = this.route.snapshot.params['id'];
    this.getAdventure(adventureId);
  }

  getAdventure(adventureId: string) {
    this.adventureService
      .getAdventureById(adventureId)
      .subscribe(
      data => {
        this.adventure = data;
      },
      error => this.errorMessage = <any>error
      );
  }

}
