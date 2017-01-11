/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {HomeComponent} from "./home/home.component";
import {MenuComponent} from "./menu/menu.component";
import {CategoryFilterPipe} from "./menu/category-filter.pipe";
import {ContactusComponent} from "./contactus/contactus.component";
import {DishdetailComponent} from "./dishdetail/dishdetail.component";
import {OrderByPipe} from "./order-by-pipe/order-by.pipe";
import {AboutusComponent} from "./aboutus/aboutus.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {APP_BASE_HREF} from "@angular/common";

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MenuComponent,
        CategoryFilterPipe,
        ContactusComponent,
        DishdetailComponent,
        OrderByPipe,
        AboutusComponent,
        HomeComponent
      ],
      imports: [
        FormsModule,
        AppRoutingModule,
        BrowserModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
