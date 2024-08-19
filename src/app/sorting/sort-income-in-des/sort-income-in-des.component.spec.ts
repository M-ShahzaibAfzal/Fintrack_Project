import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortIncomeInDesComponent } from './sort-income-in-des.component';

describe('SortIncomeInDesComponent', () => {
  let component: SortIncomeInDesComponent;
  let fixture: ComponentFixture<SortIncomeInDesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortIncomeInDesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortIncomeInDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
