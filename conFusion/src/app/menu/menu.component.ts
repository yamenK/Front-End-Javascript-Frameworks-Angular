import { Component, OnInit } from '@angular/core';
import {CategoryFilterPipe} from "./category-filter.pipe";
import {MenuService} from "./menu.service";

@Component({
  selector: 'app-menu',
  providers: [CategoryFilterPipe],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    private tab = 1;
    private filtText = '';
    dishes = [];

    constructor(private menu: MenuService) { }

    select(setTab){
        this.tab = setTab;

        if (setTab === 2)
            this.filtText = "appetizer";
        else if (setTab === 3)
            this.filtText = "mains";
        else if (setTab === 4)
            this.filtText = "dessert";
        else
            this.filtText = "";
    }

    isSelected(checkTab) {
        return (this.tab === checkTab);
    }


    ngOnInit() {
        this.menu.getDishes()
            .then(dishes => this.dishes = dishes);
    }
}
