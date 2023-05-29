import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  bg = 'assets/images/res-1.jpg';

  heroImage = [
    'assets/images/res-1.jpg',
    'assets/images/res-bg-1.jpeg',
    'assets/images/res-bg-2.jpeg',
    'assets/images/res-2.jpg',
  ];
  currentIndex = 0;

  constructor() {}

  ngOnInit(): void {
    // interval(5000).subscribe(() => {
    //   this.currentIndex = (this.currentIndex + 1) % this.heroImage.length;
    //   this.bg = this.heroImage[this.currentIndex];
    // });
  }
}
