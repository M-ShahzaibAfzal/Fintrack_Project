import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSavingGoalsComponent } from './set-saving-goals.component';

describe('SetSavingGoalsComponent', () => {
  let component: SetSavingGoalsComponent;
  let fixture: ComponentFixture<SetSavingGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetSavingGoalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetSavingGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
