import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { CartService } from './../../../services/cart/cart.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isCartEmpty: boolean = false;
  isMouse: boolean = false;
  isSidebar: boolean = false;
  isDropdownSidebar: boolean = false;
  dropdownMobileIndex: number = 0;
  dropdownMobileIndex2: number = 0;
  navbarFixed: boolean = false;
  isNoFixedHeader:boolean = false;
  isHeaderBlack: boolean = false;
  isHeaderWhite: boolean = false;
  urlSegment: string = '';
  isMegaMenuOpen: boolean = false;

  // Cart variables
  cartCount: number = 0;
  subSink = new SubSink();
  developerVisibilitry: boolean = false;

  @ViewChild('issueRef') issueRef: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private ref: ElementRef
  ) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.urlSegment = event.url;
        if (event['url'] == '') {
        } 
        else if (
          event['url'].includes('food-menu/details') 
        ) 
        {
          this.isHeaderBlack = true;
          this.isHeaderWhite = false;
        } 
        else if (
          event['url'] === '/food-menu'
        ) 
        {
          this.isHeaderWhite = true;
          this.isHeaderBlack = false;
          this.isNoFixedHeader = true;
        } 
        else {
          this.isHeaderBlack = false;
          this.isHeaderWhite = false;
        }
      }
    });
  }

  ngOnInit(): void {
    this.cartService.getFoods().subscribe((res) => {
      this.cartCount = res.length;
    });
  }

  isActive(url: string): boolean {
    return url === this.router.url;
  }

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 100) {
      this.navbarFixed = true;
    } else {
      this.navbarFixed = false;
    }
  }

  @HostListener('document:click', ['$event'])
  public closeSidebar(event: any) {
    if (this.isSidebar && !this.issueRef.nativeElement.contains(event.target)) {
      this.isSidebar = false;
    }
  }

  openSidebar() {
    this.isSidebar = !this.isSidebar;
  }

  // Header mobile dropdown click
  openDropdownSidebar(event: any, index: any) {
    if (window.innerWidth < 992) {
      if (this.dropdownMobileIndex === index) {
        this.dropdownMobileIndex = -1;
      } else {
        this.dropdownMobileIndex = index;
      }
    }
  }

  // Header mobile inner dropdown click
  openDropdownInner(event: any, index: any) {
    if (window.innerWidth < 992) {
      if (this.dropdownMobileIndex2 === index) {
        this.dropdownMobileIndex2 = -1;
      } else {
        this.dropdownMobileIndex2 = index;
      }
    }
  }

  hideSidebar() {
    this.isSidebar = false;
  }

  // Go to page
  goToPage(slug: any): void {
    console.log(slug);
    this.isMegaMenuOpen = false;
    this.router.navigate([`${slug}`]);
    // this.isSidebar = false;
    this.hideSidebar();
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
}
