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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CategoryFilterPipe,
    ContactusComponent,
    DishdetailComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
