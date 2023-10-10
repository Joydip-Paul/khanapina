import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @ViewChild('footerBarMobile') footerBarMobile!: ElementRef;
  mobileFooter:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
}
