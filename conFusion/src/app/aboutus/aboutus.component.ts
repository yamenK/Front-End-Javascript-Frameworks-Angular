import { Component, OnInit } from '@angular/core';
import {CorporateService} from "./corporate.service";

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  private chefs;
  private showChefs :boolean = false;
  private message :string = "Loading ..."

  constructor(private corporateService: CorporateService) {}

  ngOnInit() {
    this.corporateService.getLeaders()
        .then(leaders => {
          this.showChefs = true;
          this.chefs = leaders;
        })
        .catch(error =>{
          this.showChefs = false;
          this.message = "Error " + error;
        });
  }

}
