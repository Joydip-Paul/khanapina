import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-my-hero',
  templateUrl: './my-hero.component.html',
  styleUrls: ['./my-hero.component.scss']
})
export class MyHeroComponent implements OnInit {
  @ContentChild(TemplateRef) template: TemplateRef<any>;
  @Input() backgroundImage: string = "";
  @Input() isOverlay: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}