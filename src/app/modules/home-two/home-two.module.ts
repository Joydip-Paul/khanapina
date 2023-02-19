import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeTwoRoutingModule } from './home-two-routing.module';
import { HomeTwoComponent } from './home-two.component';


@NgModule({
  declarations: [
    HomeTwoComponent
  ],
  imports: [
    CommonModule,
    HomeTwoRoutingModule
  ]
})
export class HomeTwoModule { }
