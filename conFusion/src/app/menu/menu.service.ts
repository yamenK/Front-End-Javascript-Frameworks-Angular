import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

const dishesUrl: string = "http://localhost:3000/dishes";
const promotionsUrl: string = "http://localhost:3000/promotions";

@Injectable()
export class MenuService {

  promotions = [
    {
      _id:0,
      name:'Weekend Grand Buffet',
      image: '../../assets/images/buffet.png',
      label:'New',
      price:'19.99',
      description:'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person ',
    }
  ];

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
