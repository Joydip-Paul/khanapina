import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppDownloadComponent } from './components/app-download/app-download.component';
import { HeroComponent } from './components/hero/hero.component';
import { SharedModule } from '../../shared/shared.module';
import { AddCartComponent } from './components/add-cart/add-cart.component';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    HeroComponent,
    HomeComponent,
    AboutUsComponent,
    MenuComponent,
    AppDownloadComponent,
    AddCartComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    RatingModule
  ]
})
export class HomeModule { }
