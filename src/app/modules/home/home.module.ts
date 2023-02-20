import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
// import { HeroComponent } from './components/hero/hero.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { AppDownloadComponent } from './components/app-download/app-download.component';
import { HeroComponent } from './components/hero/hero.component';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [
    HeroComponent,
    HomeComponent,
    AboutUsComponent,
    MenuComponent,
    AppDownloadComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
