import { Component, OnInit } from '@angular/core';

import { AdventureDataCreateModel } from '../../../app_core/models/adventure-data-create.model';

@Component({
  selector: 'app-add-snapshots',
  templateUrl: './add-snapshots.component.html',
  styleUrls: ['./add-snapshots.component.css']
})
export class AddSnapshotsComponent implements OnInit {
private count:number;

  constructor() { 
    this.count = 1;
  }

  ngOnInit() {
  }

}
