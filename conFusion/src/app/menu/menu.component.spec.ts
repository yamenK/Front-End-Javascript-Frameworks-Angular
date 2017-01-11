/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import {CategoryFilterPipe} from "./category-filter.pipe";
import {RouterModule} from "@angular/router";
import {MenuService} from "./menu.service";
import {HttpModule} from "@angular/http";

const dishes = [
  {
    "id": 0,
    "name": "Uthapizza",
    "image": "images/uthapizza.png",
    "category": "mains",
    "label": "Hot",
    "price": "4.99",
    "description": "A",
    "comments":[{}]
  },
  {
    "id": 1,
    "name": "Zucchipakoda",
    "image": "images/zucchipakoda.png",
    "category": "mains",
    "label": "New",
    "price": "4.99",
    "description": "A",
    "comments":[{}]
  }
]

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, HttpModule],
      declarations: [ MenuComponent, CategoryFilterPipe],
      providers: [MenuService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;

    var menuService = fixture.debugElement.injector.get(MenuService)
    var spy = spyOn(menuService, 'getDishes')
      .and.returnValue(Promise.resolve(dishes));
    fixture.detectChanges();
    });

  it('should create menu-component', () => {
    expect(component).toBeTruthy();
  });

  it('should create "dishes" with 2 dishes fetched from xhr', async(() => {
    fixture.whenStable().then(() => {
      expect(component.showMenu).toBeTruthy();
      expect(component.dishes).toBeDefined();
      expect(component.dishes.length).toBe(2);
    });
  }));

  it('should have the correct data order in the dishes', async(() => {

    fixture.whenStable().then(() => {
      expect(component.dishes[0].name).toBe("Uthapizza");
      expect(component.dishes[1].label).toBe("New");
    });
  }));

  it('should change the tab selected based on tab clicked', async(() => {

    fixture.whenStable().then(() => {
      expect(component.tab).toEqual(1);

      component.select(3);

      expect(component.tab).toEqual(3);
      expect(component.filtText).toEqual('mains');
    });
  }));

});
