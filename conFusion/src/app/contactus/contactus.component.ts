import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  feedback =  {mychannel:"", firstName:"", lastName:"",
    agree: false, email:"", tel:{number:"", areaCode:""}, comments: ""};

  constructor() { }

  ngOnInit() {
  }

}
