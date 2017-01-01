import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adventure-create',
  templateUrl: './adventure-create.component.html',
  styleUrls: ['./adventure-create.component.css']
})
export class AdventureCreateComponent implements OnInit {
  private title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'adventure-create works!';
  }

}
