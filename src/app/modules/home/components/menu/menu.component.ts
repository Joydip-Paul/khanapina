import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  totalstar:any = 10;
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;
  // const swiperEl = document.querySelector('swiper-container');

  bestDishes = [
    {
      id:1,
      title: "Smoked Chicken Grill",
      price: '23',
      time: '25',
      thumb: 'assets/images/food-10.jpeg',
      star: 5
    },
    {
      id:2,
      title: "Burger delight",
      price: '10',
      time: '30',
      thumb: 'assets/images/food-11.jpeg',
      star: 5
    },
    {
      id:3,
      title: "Seefood noodles",
      price: '15',
      time: '25',
      thumb: 'assets/images/food-12.jpeg',
      star: 3
    },
    {
      id:4,
      title: "Oven baked flatty",
      price: '5',
      time: '10',
      thumb: 'assets/images/food-13.jpeg',
      star: 4
    }
  ]

  constructor() { 
  }

  ngOnInit(): void {
  }

  // const swiperParams = {
  //   slidesPerView: 1,
  //   breakpoints: {
  //     640: {
  //       slidesPerView: 2,
  //     },
  //     1024: {
  //       slidesPerView: 3,
  //     },
  //   },
  //   on: {
  //     init() {
  //     },
  //   },
  // };

  // Object.assign(swiperEl:any, swiperParams:any);

  // swiperEl.initialize();

}
