import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

const leadershipUrl: string = "http://localhost:3000/leadership";

@Injectable()
export class CorporateService {

  constructor(private http: Http) { }

  public getLeaders(){
    return this.http.get(leadershipUrl)
        .toPromise()
        .then(response => response.json());
  }

  public getLeader(index){
    return this.http.get(leadershipUrl+"/"+index)
        .toPromise()
        .then(response => response.json())
  }

}
