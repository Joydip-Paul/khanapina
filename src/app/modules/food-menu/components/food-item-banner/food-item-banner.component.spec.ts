import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemBannerComponent } from './food-item-banner.component';

describe('FoodItemBannerComponent', () => {
  let component: FoodItemBannerComponent;
  let fixture: ComponentFixture<FoodItemBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodItemBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodItemBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
