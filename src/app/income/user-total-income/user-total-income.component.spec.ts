import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTotalIncomeComponent } from './user-total-income.component';

describe('UserTotalIncomeComponent', () => {
  let component: UserTotalIncomeComponent;
  let fixture: ComponentFixture<UserTotalIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTotalIncomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTotalIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
