import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIncomeCategoryComponent } from './get-income-category.component';

describe('GetIncomeCategoryComponent', () => {
  let component: GetIncomeCategoryComponent;
  let fixture: ComponentFixture<GetIncomeCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetIncomeCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetIncomeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
