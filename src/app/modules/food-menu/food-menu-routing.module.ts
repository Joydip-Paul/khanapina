import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodDetailsComponent } from './components/food-details/food-details.component';
import { FoodMenuComponent } from './food-menu.component';

const routes: Routes = [{ path: '', component: FoodMenuComponent },
// { path: 'food-menu/details/:id', component: FoodDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodMenuRoutingModule { }
