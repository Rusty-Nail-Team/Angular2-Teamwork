import { Component, OnInit } from '@angular/core';

import { AdventureDataCreateModel } from '../../../app_core/models/adventure-data-create.model';
import { UserProfileModel } from './../../../app_core/models/user-profile.model';



@Component({
  selector: 'app-add-snapshots',
  templateUrl: './add-snapshots.component.html',
  styleUrls: ['./add-snapshots.component.css']
})
export class AddSnapshotsComponent implements OnInit {
private count:number;
private model: AdventureDataCreateModel;
private currentUser: UserProfileModel;

  constructor() { 
    this.count = 1
  }

  ngOnInit() {
  }

  addAdventureImage() {
    this.model.ownerId = this.currentUser.objectId;
    
  }

}
