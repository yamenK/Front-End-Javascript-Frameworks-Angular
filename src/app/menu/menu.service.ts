import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

const dishesUrl: string = "http://localhost:3000/dishes";
const promotionsUrl: string = "http://localhost:3000/promotions";

@Injectable()
export class MenuService {

  constructor(private http: Http) { }

  public getDishes(){
    return this.http.get(dishesUrl)
        .toPromise()
        .then(response => response.json());
  }

  public getDish(index) {
    return this.http.get(dishesUrl+"/"+index)
        .toPromise()
        .then(response => response.json())
  }

  public getPromotion(index){
    return this.http.get(promotionsUrl+"/"+index)
        .toPromise()
        .then(response => response.json());
  }

}
