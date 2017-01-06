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
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
