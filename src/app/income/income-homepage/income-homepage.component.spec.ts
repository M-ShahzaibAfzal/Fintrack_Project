import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeHomepageComponent } from './income-homepage.component';

describe('IncomeHomepageComponent', () => {
  let component: IncomeHomepageComponent;
  let fixture: ComponentFixture<IncomeHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
