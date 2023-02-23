import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = [];
  public foodList = new BehaviorSubject<any>([]);

  constructor() { }

  getFoods() {
    return this.foodList.asObservable();
  }

  // setFood(food: any) {
  //   this.cartItemList.push(...food);
  //   this.foodList.next(food);
  // }

  addToCart(food: any) {
    this.cartItemList.push(food);
    this.foodList.next(this.cartItemList);
    console.log(this.cartItemList);
  }
}
