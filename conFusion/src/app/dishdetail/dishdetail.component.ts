import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {MenuService} from "../menu/menu.service";

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {

  dish= null;
  filtertext : string="";
  comment = {author: "", rating: 5, comment: "", date: ""};

  private id;

  constructor(private menu: MenuService, private route: ActivatedRoute) {
  }

  submitComment(form: NgForm){
    this.comment.date = new Date().toISOString();

    this.dish.comments.push(this.comment);
    console.log(this.comment);

    this.comment = {author: "", rating: 5, comment: "", date: ""};
    form.form.reset();

  }

  ngOnInit() {
    // (+) converts string 'id' to a number
    let id = +this.route.snapshot.params['id'];
    this.dish = this.menu.getDish(id);
  }
}

