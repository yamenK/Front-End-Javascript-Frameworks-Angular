import { NgModule } from '@angular/core';
import {ContactusComponent} from "../contactus/contactus.component";
import {DishdetailComponent} from "../dishdetail/dishdetail.component";
import {MenuComponent} from "../menu/menu.component";
import {RouterModule} from "@angular/router";

const routes = [
  {path:'contactus', component:ContactusComponent},
  {path:'menu', component:MenuComponent},
  {path: 'menu/:id', component: DishdetailComponent},
  {path: '', redirectTo: '/contactus', pathMatch: 'full'},
  {path:'**', component:ContactusComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {}
