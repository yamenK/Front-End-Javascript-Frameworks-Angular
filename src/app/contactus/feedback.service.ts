import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

const feedbackUrl: string = "http://localhost:3000/feedback";

@Injectable()
export class FeedbackService {

  constructor(private http: Http) { }

  public submitFeedback(feedback){
    this.http
        .post(feedbackUrl, feedback)
        .toPromise()
        .then(res => res.json().data)
  }
}
