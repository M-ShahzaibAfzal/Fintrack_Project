import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsHomepageComponent } from './savings-homepage.component';

describe('SavingsHomepageComponent', () => {
  let component: SavingsHomepageComponent;
  let fixture: ComponentFixture<SavingsHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingsHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingsHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
