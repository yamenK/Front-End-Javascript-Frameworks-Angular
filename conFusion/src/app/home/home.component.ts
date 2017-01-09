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
  private promotion;
  private chef;
  private showDish = false;
  private message="Loading ...";

  constructor(private menu: MenuService, private corporateService: CorporateService) { }

  ngOnInit() {
    this.menu.getDish(0)
        .then(dish => {
          this.showDish = true;
          this.dish = dish
        })
        .catch(error => {
          this.showDish = false;
          this.message = "Error " + error;
        });
    this.promotion = this.menu.getPromotion(0);
    this.chef = this.corporateService.getLeader(3);
  }

}
