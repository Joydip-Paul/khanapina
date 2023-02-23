import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from './../../../../services/cart/cart.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent implements OnInit {
  foodId: any;
  routerEvent: any;
  foodData: any;
  foodSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private cartService: CartService,
  ) {
    this.route.params.subscribe(data => {
      this.foodId = String(data['id']);
      console.log(this.foodId);
      this.loadfoodDetails(this.foodId);
    });
  }

  ngOnInit(): void {
  }

  loadfoodDetails(id: any): void {
    this.foodSubscription = this.apiService.getFoodDetails(id).subscribe(
      (response: any) => {
        this.foodData = response;
        console.log(this.foodData);
      });
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }

}
