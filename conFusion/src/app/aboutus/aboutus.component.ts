import { Component, OnInit } from '@angular/core';
import {CorporateService} from "./corporate.service";

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  private chefs;

  constructor(private corporateService: CorporateService) {}

  ngOnInit() {
    this.chefs = this.corporateService.getLeaders();
  }

}
