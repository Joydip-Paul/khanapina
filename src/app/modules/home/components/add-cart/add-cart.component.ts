import { Component, OnInit } from '@angular/core';
import { CartService } from './../../../../services/cart/cart.service';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.scss']
})
export class AddCartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
