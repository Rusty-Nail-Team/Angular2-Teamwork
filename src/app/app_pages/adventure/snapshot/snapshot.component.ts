import { Component, OnInit, Input } from '@angular/core';

import { AdventureDataModel } from './../../../app_core/models/adventure-data.model';

@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.component.html',
  styleUrls: ['./snapshot.component.css']
})
export class SnapshotComponent implements OnInit, Input {
  
  constructor() { }

  @Input('adventureDataModel') snapshot: AdventureDataModel;
  @Input() author: string;

  ngOnInit() {
    
  }

}
