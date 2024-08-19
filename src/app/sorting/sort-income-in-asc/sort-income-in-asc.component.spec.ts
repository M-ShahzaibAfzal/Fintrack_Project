import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortIncomeInAscComponent } from './sort-income-in-asc.component';

describe('SortIncomeInAscComponent', () => {
  let component: SortIncomeInAscComponent;
  let fixture: ComponentFixture<SortIncomeInAscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortIncomeInAscComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortIncomeInAscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
