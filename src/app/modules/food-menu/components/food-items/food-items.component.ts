import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';
import { ApiService } from '../../../../services/api.service';
import { CartService } from './../../../../services/cart/cart.service';

@Component({
  selector: 'app-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.scss']
})
export class FoodItemsComponent implements OnInit {
  foodList: any = [];
  dataList: any = [];
  cartCount: number = 1;

  private subs = new SubSink();

  constructor(
    private foodService: ApiService,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getFoodList();
    this.getData();
  }

  getFoodList(): void {
    this.subs.sink = this.foodService.getFoodListApi().subscribe((res: any) => {
      if (res.length) {
        this.foodList = res;
        console.log(this.foodList);
      }
    })
  }

  getData(): void {
    this.subs.sink = this.foodService.getDataApi().subscribe((res: any) => {
      if (res.length) {
        this.dataList = res;
        // console.log(this.dataList);
      }
    })
  }


  addToCart(event: any, item: any) {
    event.stopPropagation();
    this.cartService.addToCart(item);
    console.log(event, "Added to the cart");
  }

  onPlayerReady(event: any) {
    // You can do any setup or customization here
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
