import { Component, OnInit } from '@angular/core';

import { AdventureService } from './../../../app_core/services/adventure.service';

import { AdventureDataCreateModel } from '../../../app_core/models/adventure-data-create.model';
import { AdventureModel } from './../../../app_core/models/adventure.model';
import { AlertService } from '../../../app_core/services/alert.service';


@Component({
  selector: 'app-add-snapshots',
  templateUrl: './add-snapshots.component.html',
  styleUrls: ['./add-snapshots.component.css']
})
export class AddSnapshotsComponent implements OnInit {
  private count: number;
  private model: AdventureDataCreateModel;
  private currentAdventure: AdventureModel;

  constructor(
    private adventureService: AdventureService,
    private alertService: AlertService
  ) {
    this.count = 1
    this.model = new AdventureDataCreateModel;
  }

  ngOnInit() {
    
  }

  addAdventureImage() {
    this.adventureService.addSnapshotToAdventure(this.currentAdventure.objectId, this.model)
      //.subscribe(data => {
        //this.currentAdventure = data;
        //this.router.navigate(['adventures/' + this.currentAdventure.objectId]);
      // },
      // error => {
      //   this.alertService.error(error);
      // });
  }

}
