import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodDetailsComponent } from './modules/food-menu/components/food-details/food-details.component';

const routes: Routes = [{ path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
{ path: 'home-two', loadChildren: () => import('./modules/home-two/home-two.module').then(m => m.HomeTwoModule) },
{ path: 'food-menu', loadChildren: () => import('./modules/food-menu/food-menu.module').then(m => m.FoodMenuModule) },
{ path: 'food-menu/details/:id', component: FoodDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
