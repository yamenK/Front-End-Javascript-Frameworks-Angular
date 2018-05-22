/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from "@angular/forms";
import {HttpModule } from '@angular/http';
import {AppRoutingModule} from "../app-routing/app-routing.module";
import {APP_BASE_HREF} from "@angular/common";

import { ContactusComponent } from './contactus.component';
import {MenuComponent} from "../menu/menu.component";
import {HomeComponent} from "../home/home.component";
import {AboutusComponent} from "../aboutus/aboutus.component";
import {OrderByPipe} from "../order-by-pipe/order-by.pipe";
import {DishdetailComponent} from "../dishdetail/dishdetail.component";
import {CategoryFilterPipe} from "../menu/category-filter.pipe";

describe('ContactusComponent', () => {
  let component: ContactusComponent;
  let fixture: ComponentFixture<ContactusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OrderByPipe,
        CategoryFilterPipe,
        ContactusComponent,
        DishdetailComponent,
        AboutusComponent,
        HomeComponent,
        MenuComponent
      ],
      imports: [FormsModule, HttpModule, AppRoutingModule],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
