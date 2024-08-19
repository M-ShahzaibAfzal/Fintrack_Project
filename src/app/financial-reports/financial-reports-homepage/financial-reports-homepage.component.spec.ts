import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialReportsHomepageComponent } from './financial-reports-homepage.component';

describe('FinancialReportsHomepageComponent', () => {
  let component: FinancialReportsHomepageComponent;
  let fixture: ComponentFixture<FinancialReportsHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialReportsHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialReportsHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
