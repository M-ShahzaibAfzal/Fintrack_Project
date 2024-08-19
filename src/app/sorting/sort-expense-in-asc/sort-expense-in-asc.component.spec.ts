import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortExpenseInAscComponent } from './sort-expense-in-asc.component';

describe('SortExpenseInAscComponent', () => {
  let component: SortExpenseInAscComponent;
  let fixture: ComponentFixture<SortExpenseInAscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortExpenseInAscComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortExpenseInAscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
