import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  dishes=[
    {
      _id:0,
      name:'Uthapizza',
      image: '../../../assets/images/uthapizza.png',
      category: 'mains',
      label:'Hot',
      price:'4.99',
      description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
      comments: [
        {
          rating:5,
          comment:"Imagine all the eatables, living in conFusion!",
          author:"John Lemon",
          date:"2012-10-16T17:57:28.556094Z"
        },
        {
          rating:4,
          comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
          author:"Paul McVites",
          date:"2014-09-05T17:57:28.556094Z"
        },
        {
          rating:3,
          comment:"Eat it, just eat it!",
          author:"Michael Jaikishan",
          date:"2015-02-13T17:57:28.556094Z"
        },
        {
          rating:4,
          comment:"Ultimate, Reaching for the stars!",
          author:"Ringo Starry",
          date:"2013-12-02T17:57:28.556094Z"
        },
        {
          rating:2,
          comment:"It's your birthday, we're gonna party!",
          author:"25 Cent",
          date:"2011-12-02T17:57:28.556094Z"
        }                                                          ]
    },
    {
      _id:1,
      name:'Zucchipakoda',
      image: '../../../assets/images/zucchipakoda.png',
      category: 'appetizer',
      label:'',
      price:'1.99',
      description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
      comments: [
        {
          rating:5,
          comment:"Imagine all the eatables, living in conFusion!",
          author:"John Lemon",
          date:"2012-10-16T17:57:28.556094Z"
        },
        {
          rating:4,
          comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
          author:"Paul McVites",
          date:"2014-09-05T17:57:28.556094Z"
        },
        {
          rating:3,
          comment:"Eat it, just eat it!",
          author:"Michael Jaikishan",
          date:"2015-02-13T17:57:28.556094Z"
        },
        {
          rating:4,
          comment:"Ultimate, Reaching for the stars!",
          author:"Ringo Starry",
          date:"2013-12-02T17:57:28.556094Z"
        },
        {
          rating:2,
          comment:"It's your birthday, we're gonna party!",
          author:"25 Cent",
          date:"2011-12-02T17:57:28.556094Z"
        }                                                          ]
    },
    {
      _id:2,
      name:'Vadonut',
      image: '../../../assets/images/vadonut.png',
      category: 'appetizer',
      label:'New',
      price:'1.99',
      description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
      comments: [
        {
          rating:5,
          comment:"Imagine all the eatables, living in conFusion!",
          author:"John Lemon",
          date:"2012-10-16T17:57:28.556094Z"
        },
        {
          rating:4,
          comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
          author:"Paul McVites",
          date:"2014-09-05T17:57:28.556094Z"
        },
        {
          rating:3,
          comment:"Eat it, just eat it!",
          author:"Michael Jaikishan",
          date:"2015-02-13T17:57:28.556094Z"
        },
        {
          rating:4,
          comment:"Ultimate, Reaching for the stars!",
          author:"Ringo Starry",
          date:"2013-12-02T17:57:28.556094Z"
        },
        {
          rating:2,
          comment:"It's your birthday, we're gonna party!",
          author:"25 Cent",
          date:"2011-12-02T17:57:28.556094Z"
        }
      ]
    },
    {
      _id:3,
      name:'ElaiCheese Cake',
      image: '../../../assets/images/elaicheesecake.png',
      category: 'dessert',
      label:'',
      price:'2.99',
      description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
      comments: [
        {
          rating:5,
          comment:"Imagine all the eatables, living in conFusion!",
          author:"John Lemon",
          date:"2012-10-16T17:57:28.556094Z"
        },
        {
          rating:4,
          comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
          author:"Paul McVites",
          date:"2014-09-05T17:57:28.556094Z"
        },
        {
          rating:3,
          comment:"Eat it, just eat it!",
          author:"Michael Jaikishan",
          date:"2015-02-13T17:57:28.556094Z"
        },
        {
          rating:4,
          comment:"Ultimate, Reaching for the stars!",
          author:"Ringo Starry",
          date:"2013-12-02T17:57:28.556094Z"
        },
        {
          rating:2,
          comment:"It's your birthday, we're gonna party!",
          author:"25 Cent",
          date:"2011-12-02T17:57:28.556094Z"
        }
      ]
    }];

  promotions = [
    {
      _id:0,
      name:'Weekend Grand Buffet',
      image: 'images/buffet.png',
      label:'New',
      price:'19.99',
      description:'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person ',
    }
  ];

  constructor() { }

  public getDishes(){
    return this.dishes;
  };

  public getDish(index) {
    return this.dishes[index];
  };

  public getPromotion(index){
    return this.promotions[index];
  }

}
