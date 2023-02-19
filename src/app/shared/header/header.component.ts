import { Component, OnInit, HostListener } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
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