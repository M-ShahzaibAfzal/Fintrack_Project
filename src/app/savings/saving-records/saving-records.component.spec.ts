import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingRecordsComponent } from './saving-records.component';

describe('SavingRecordsComponent', () => {
  let component: SavingRecordsComponent;
  let fixture: ComponentFixture<SavingRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingRecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
