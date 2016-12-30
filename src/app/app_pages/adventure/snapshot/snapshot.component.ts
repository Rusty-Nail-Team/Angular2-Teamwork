import { 
  Component, 
  OnInit, 
  Input,
  trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';

import { AdventureDataModel } from './../../../app_core/models/adventure-data.model';

@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.component.html',
  styleUrls: ['./snapshot.component.css'],
  animations: [
  trigger('snapshotState', [
    state('inactive', style({transform: 'translateX(0) scale(1)'})),
    state('active',   style({transform: 'translateX(0) scale(1.1)'})),
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('100ms ease-out')),
    transition('void => inactive', [
      style({transform: 'translateX(-100%) scale(1)'}),
      animate(100)
    ]),
    transition('inactive => void', [
      animate(100, style({transform: 'translateX(100%) scale(1)'}))
    ]),
    transition('void => active', [
      style({transform: 'translateX(0) scale(0)'}),
      animate(200)
    ]),
    transition('active => void', [
      animate(200, style({transform: 'translateX(0) scale(0)'}))
    ])
  ])
]
})
export class SnapshotComponent implements OnInit, Input {
  private state: string;
  
  constructor() {
    this.state = 'inactive';
   }

  @Input('adventureDataModel') snapshot: AdventureDataModel;
  @Input() author: string;

  ngOnInit() {
    
  }

  toggleState(){
    this.state = this.state === 'inactive' ? 'active' : 'inactive';
  }

}
