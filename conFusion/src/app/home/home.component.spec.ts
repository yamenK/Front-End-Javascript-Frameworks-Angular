/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from "@angular/forms";
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from "@angular/common";

import { HomeComponent } from './home.component';
import {CategoryFilterPipe} from "../menu/category-filter.pipe";
import {AppRoutingModule} from "../app-routing/app-routing.module";
import {ContactusComponent} from "../contactus/contactus.component";
import {DishdetailComponent} from "../dishdetail/dishdetail.component";
import {OrderByPipe} from "../order-by-pipe/order-by.pipe";
import {AboutusComponent} from "../aboutus/aboutus.component";
import {MenuComponent} from "../menu/menu.component";
import {MenuService} from "../menu/menu.service";
import {CorporateService} from "../aboutus/corporate.service";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

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
      providers: [MenuService, CorporateService, {provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
