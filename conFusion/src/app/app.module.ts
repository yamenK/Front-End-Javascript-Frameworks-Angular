import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CategoryFilterPipe } from './menu/category-filter.pipe';
import { ContactusComponent } from './contactus/contactus.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { OrderByPipe } from './order-by-pipe/order-by.pipe';
import {MenuService} from "./menu/menu.service";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {AboutusComponent} from "./aboutus/aboutus.component";
import { HomeComponent } from './home/home.component';
import {CorporateService} from "./aboutus/corporate.service";

@NgModule({
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
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MenuService, CorporateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
