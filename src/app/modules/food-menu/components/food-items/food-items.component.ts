import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../../services/api.service';

@Component({
  selector: 'app-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.scss']
})
export class FoodItemsComponent implements OnInit {

  constructor(private foodService: ApiService) { }

  ngOnInit(): void {
  }

}
