/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from "@angular/forms";
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from "@angular/common";

import { DishdetailComponent } from './dishdetail.component';
import {OrderByPipe} from "../order-by-pipe/order-by.pipe";
import {MenuService} from "../menu/menu.service";
import {AppRoutingModule} from "../app-routing/app-routing.module";
import {AppComponent} from "../app.component";
import {HomeComponent} from "../home/home.component";
import {CategoryFilterPipe} from "../menu/category-filter.pipe";
import {ContactusComponent} from "../contactus/contactus.component";
import {AboutusComponent} from "../aboutus/aboutus.component";
import {MenuComponent} from "../menu/menu.component";
import {CorporateService} from "../aboutus/corporate.service";

describe('DishdetailComponent', () => {
  let component: DishdetailComponent;
  let fixture: ComponentFixture<DishdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CategoryFilterPipe,
        ContactusComponent,
        DishdetailComponent,
        OrderByPipe,
        AboutusComponent,
        HomeComponent,
        MenuComponent
      ],
      imports: [FormsModule, HttpModule, AppRoutingModule],
      providers:[MenuService, {provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
