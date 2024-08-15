import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesHomepageComponent } from './expenses-homepage.component';

describe('ExpensesHomepageComponent', () => {
  let component: ExpensesHomepageComponent;
  let fixture: ComponentFixture<ExpensesHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
