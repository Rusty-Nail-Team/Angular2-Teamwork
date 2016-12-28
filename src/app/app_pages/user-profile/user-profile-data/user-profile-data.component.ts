import { Component, OnInit, Input } from '@angular/core';

import { UserModel } from './../../../app_core/models/user.model';

@Component({
  selector: '[app-user-profile-data]',
  templateUrl: './user-profile-data.component.html',
  styleUrls: ['./user-profile-data.component.css']
})
export class UserProfileDataComponent implements OnInit, Input {

  constructor() { }

  ngOnInit() {
  }

  @Input() us: UserModel;

  get userPhoto(): string {

    return this.us.userPhoto;
  }

}
