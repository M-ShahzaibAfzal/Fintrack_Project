import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyIncomeSummaryComponent } from './monthly-income-summary.component';

describe('MonthlyIncomeSummaryComponent', () => {
  let component: MonthlyIncomeSummaryComponent;
  let fixture: ComponentFixture<MonthlyIncomeSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyIncomeSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyIncomeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
