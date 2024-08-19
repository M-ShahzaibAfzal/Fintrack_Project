import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSavingAmountComponent } from './add-saving-amount.component';

describe('AddSavingAmountComponent', () => {
  let component: AddSavingAmountComponent;
  let fixture: ComponentFixture<AddSavingAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSavingAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSavingAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
