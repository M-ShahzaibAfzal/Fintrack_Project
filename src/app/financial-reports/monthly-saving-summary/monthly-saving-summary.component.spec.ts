import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlySavingSummaryComponent } from './monthly-saving-summary.component';

describe('MonthlySavingSummaryComponent', () => {
  let component: MonthlySavingSummaryComponent;
  let fixture: ComponentFixture<MonthlySavingSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlySavingSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlySavingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
