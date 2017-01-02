import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AdventureService } from './../../app_core/services/adventure.service';
import { AuthenticationService } from './../../app_core/services/authentication.service';
import { UploadPhotoService } from './../../app_core/services/upload-photo.service';

import { AdventureCreateModel } from './../../app_core/models/adventure-create.model';
import { AdventureDataCreateModel } from './../../app_core/models/adventure-data-create.model';
import { UserProfileModel } from './../../app_core/models/user-profile.model';

@Component({
  selector: 'app-adventure-create',
  templateUrl: './adventure-create.component.html',
  styleUrls: ['./adventure-create.component.css'],

})
export class AdventureCreateComponent implements OnInit {
  private title: string;
  private currentUser: UserProfileModel;
  private model: AdventureCreateModel;
  private adventure: AdventureCreateModel;
  private modelData: AdventureDataCreateModel[];

  constructor(
    private adventureService: AdventureService,
    private authenticationService: AuthenticationService,
    private uploadPhotoService: UploadPhotoService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.model = new AdventureCreateModel;
  }

  ngOnInit() {
    this.title = 'New Adventure';
  }

  createAdventure() {
    this.currentUser = this.authenticationService.getCurrentUser();
    this.model.ownerId = this.currentUser.objectId;
    this.adventureService.createAdventure(this.model)
    //this.router.navigate(['adventures/' + ]);
  }

}
