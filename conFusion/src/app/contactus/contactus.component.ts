import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  feedback =  {mychannel:"", firstName:"", lastName:"",
    agree: false, email:"", tel:{number:"", areaCode:""}, comments: ""};

  channels = [{value: "tel", label: "Tel."}, {value: "Email", label: "Email"}];


    constructor() {
    }

  invalidChannelSelection : boolean = false;

  ngOnInit() {
  }

  sendFeedback(form: NgForm) {
      console.log(this.feedback);

      if (this.feedback.agree && (this.feedback.mychannel == "")) {
          this.invalidChannelSelection = true;
          console.log('incorrect');
      }
      else {
          this.invalidChannelSelection = false;
          this.feedback =  {mychannel:"", firstName:"", lastName:"",
              agree: false, email:"", tel:{number:"", areaCode:""}, comments: ""};
          this.feedback.mychannel = "";
          form.reset();
          console.log(this.feedback);
      }
  };

}
