import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {FeedbackService} from "./feedback.service";

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  feedback =  {mychannel:"", firstName:"", lastName:"",
    agree: false, email:"", tel:{number:"", areaCode:""}, comments: ""};

  channels = [{value: "tel", label: "Tel."}, {value: "Email", label: "Email"}];


    constructor(private feedbackService: FeedbackService) {
    }

    invalidChannelSelection : boolean = false;

    ngOnInit() {
    }

    sendFeedback(form: NgForm) {
      if (this.feedback.agree && (this.feedback.mychannel == "")) {
          this.invalidChannelSelection = true;
          console.log('incorrect');
      }else {
          this.invalidChannelSelection = false;
          this.feedbackService.submitFeedback(this.feedback);
          form.reset();
      }
    };

}
