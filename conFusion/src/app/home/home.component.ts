import { Component, OnInit } from '@angular/core';
import {MenuService} from "../menu/menu.service";
import {CorporateService} from "../aboutus/corporate.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private dish;
  private dishMessage="Loading ...";
  private showDish = false;

  private promotion;
  private promoMessage="Loading ...";
  private showPromotion = false;

  private chef;



  constructor(private menu: MenuService, private corporateService: CorporateService) { }

  ngOnInit() {
    this.menu.getDish(0)
        .then(dish => {
          this.showDish = true;
          this.dish = dish
        })
        .catch(error => {
          this.showDish = false;
          this.dishMessage = "Error " + error;
        });

    this.promotion = this.menu.getPromotion(0)
        .then(promo => {
          this.showPromotion = true;
          this.promotion = promo
        })
        .catch(error => {
          this.showPromotion = false;
          this.promoMessage =  "Error " + error;
        });

    this.chef = this.corporateService.getLeader(3);
  }

}
