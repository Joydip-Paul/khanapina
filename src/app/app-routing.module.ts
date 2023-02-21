import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
{ path: 'home-two', loadChildren: () => import('./modules/home-two/home-two.module').then(m => m.HomeTwoModule) },
{ path: 'food-menu', loadChildren: () => import('./modules/food-menu/food-menu.module').then(m => m.FoodMenuModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
