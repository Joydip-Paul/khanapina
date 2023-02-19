import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppDownloadComponent } from './components/app-download/app-download.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    AboutUsComponent,
    MenuComponent,
    AppDownloadComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
