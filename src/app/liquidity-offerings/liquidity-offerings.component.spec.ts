import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidityOfferingsComponent } from './liquidity-offerings.component';

describe('LiquidityOfferingsComponent', () => {
  let component: LiquidityOfferingsComponent;
  let fixture: ComponentFixture<LiquidityOfferingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiquidityOfferingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiquidityOfferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
