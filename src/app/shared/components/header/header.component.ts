import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { CartService } from './../../../services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMouse: boolean = false;
  isSidebar: boolean = false;
  isDropdownSidebar: boolean = false;
  dropdownMobileIndex: number = 0;
  dropdownMobileIndex2: number = 0;
  navbarFixed: boolean = false;
  isHeaderBlack: boolean = false;
  isNoSticky: boolean = false;
  urlSegment: string = '';

  // Cart variables
  cartCount: number = 0;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private ref: ElementRef) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.urlSegment = event.url;
        if (event['url'] == '') {

        }
        else if (event['url'].includes('food-menu/details') || event['url'] === '/food-menu') {
          this.isHeaderBlack = true;
        }
        else {
          this.isHeaderBlack = false;
          this.isNoSticky = false;
        }
      }
    });
  }

  ngOnInit(): void {
    this.cartService.getFoods().subscribe(res => {
      this.cartCount = res.length;
    })
  }

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 100) {
      this.navbarFixed = true
    }
    else {
      this.navbarFixed = false;
    }
  }


  openSidebar() {
    this.isSidebar = !this.isSidebar;
  }

  // Header mobile dropdown click
  openDropdownSidebar(index: any) {
    if (window.innerWidth < 992) {
      if (this.dropdownMobileIndex === index) {
        this.dropdownMobileIndex = -1;
      }
      else {
        this.dropdownMobileIndex = index;
      }
    }
  }

  // Header mobile inner dropdown click
  openDropdownInner(index: any) {
    if (window.innerWidth < 992) {
      if (this.dropdownMobileIndex2 === index) {
        this.dropdownMobileIndex2 = -1;
      }
      else {
        this.dropdownMobileIndex2 = index;
      }
    }
  }

}