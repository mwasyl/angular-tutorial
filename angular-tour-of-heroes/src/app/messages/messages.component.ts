import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //messageService mjust be public, becasue it's going to be bind in the template
  //Angular only binds to public component properties.
  //https://angular.io/tutorial/toh-pt3
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
  }

}
