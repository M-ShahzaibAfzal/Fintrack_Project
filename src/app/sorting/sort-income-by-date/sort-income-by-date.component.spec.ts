import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortIncomeByDateComponent } from './sort-income-by-date.component';

describe('SortIncomeByDateComponent', () => {
  let component: SortIncomeByDateComponent;
  let fixture: ComponentFixture<SortIncomeByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortIncomeByDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortIncomeByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
