import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipAuthorComponent } from './tip-author.component';

describe('TipAuthorComponent', () => {
  let component: TipAuthorComponent;
  let fixture: ComponentFixture<TipAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipAuthorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
