import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-item-banner',
  templateUrl: './food-item-banner.component.html',
  styleUrls: ['./food-item-banner.component.scss']
})
export class FoodItemBannerComponent implements OnInit {
  isBodyScrollTop:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", ["$event"])
	onPageScroll(): void {
		const banner = document.querySelector<HTMLElement>("#banner");
		if (banner != null) {
			const bannerTop = banner.offsetTop;
			if (window.scrollY >= 325) {
				this.isBodyScrollTop = true;
			} else {
				this.isBodyScrollTop = false;
			}
		}
	}

  goback() {
    history.back();
  }

}
