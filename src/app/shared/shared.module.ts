import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MyHeroComponent } from './components/my-hero/my-hero.component';
import { RouterModule } from '@angular/router';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MyHeroComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    // SwiperModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MyHeroComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
