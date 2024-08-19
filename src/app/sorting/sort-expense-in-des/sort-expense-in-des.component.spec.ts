import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortExpenseInDesComponent } from './sort-expense-in-des.component';

describe('SortExpenseInDesComponent', () => {
  let component: SortExpenseInDesComponent;
  let fixture: ComponentFixture<SortExpenseInDesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortExpenseInDesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortExpenseInDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
