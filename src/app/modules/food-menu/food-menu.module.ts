import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodMenuRoutingModule } from './food-menu-routing.module';
import { FoodMenuComponent } from './food-menu.component';
import { FoodItemsComponent } from './components/food-items/food-items.component';
import { FoodDetailsComponent } from './components/food-details/food-details.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FoodMenuComponent,
    FoodItemsComponent,
    FoodDetailsComponent
  ],
  imports: [
    CommonModule,
    FoodMenuRoutingModule,
    RouterModule,
  ]
})
export class FoodMenuModule { }
