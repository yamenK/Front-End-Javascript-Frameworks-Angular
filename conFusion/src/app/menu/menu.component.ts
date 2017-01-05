import { Component, OnInit } from '@angular/core';
import {CategoryFilterPipe} from "./category-filter.pipe";

@Component({
  selector: 'app-menu',
  providers: [CategoryFilterPipe],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    dishes=[
        {
            name:'Uthapizza',
            image: '../../assets/images/uthapizza.png',
            category: 'mains',
            label:'Hot',
            price:'4.99',
            description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
            comment: ''
        },
        {
            name:'Zucchipakoda',
            image: '../../assets/images/zucchipakoda.png',
            category: 'appetizer',
            label:'',
            price:'1.99',
            description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
            comment: ''
        },
        {
            name:'Vadonut',
            image: '../../assets/images/vadonut.png',
            category: 'appetizer',
            label:'New',
            price:'1.99',
            description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
            comment: ''
        },
        {
            name:'ElaiCheese Cake',
            image: '../../assets/images/elaicheesecake.png',
            category: 'dessert',
            label:'',
            price:'2.99',
            description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
            comment: ''
        }
    ]

    private tab = 1;
    private filtText = '';

    constructor() { }

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
    }
}
