import { Component, OnInit } from '@angular/core';

import { UserService } from './../../app_core/services/user.service';

import { UserProfileModel } from './../../app_core/models/user-profile.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private title: string;
  private errorMessage: string;
  private users: UserProfileModel[];
  filterText: string;
  sortingProperties: string[];
  sortBy: string;
  orderDesc: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.title = 'Users';
    this.sortingProperties = ['Email', 'Created'];
    this.sortBy = 'Email';
    this.orderDesc = 'desc';
    this.getAllUsers();
  }

  onSortChange(ev: any) {
        this.sortBy = ev.target.value;
    }

  onOrderChange(ev: any) {
        this.orderDesc = ev.target.value;
    }

  getAllUsers() {
    this.userService
      .getAllUsers()
      .subscribe(
      data => {
        this.users = data.data;
      },
      error => this.errorMessage = <any>error
      );
  }

  onInput(ev: any) {
        this.filterText = ev.target.value;
    }

}
