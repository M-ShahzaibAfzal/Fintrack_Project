import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingHomepageComponent } from './sorting-homepage.component';

describe('SortingHomepageComponent', () => {
  let component: SortingHomepageComponent;
  let fixture: ComponentFixture<SortingHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortingHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortingHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
