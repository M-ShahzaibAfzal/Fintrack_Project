import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortExpenseByDateComponent } from './sort-expense-by-date.component';

describe('SortExpenseByDateComponent', () => {
  let component: SortExpenseByDateComponent;
  let fixture: ComponentFixture<SortExpenseByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortExpenseByDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortExpenseByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
