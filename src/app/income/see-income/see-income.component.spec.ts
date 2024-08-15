import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeIncomeComponent } from './see-income.component';

describe('SeeIncomeComponent', () => {
  let component: SeeIncomeComponent;
  let fixture: ComponentFixture<SeeIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeIncomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
