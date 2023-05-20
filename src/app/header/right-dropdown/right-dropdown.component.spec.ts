import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightDropdownComponent } from './right-dropdown.component';

describe('RightDropdownComponent', () => {
  let component: RightDropdownComponent;
  let fixture: ComponentFixture<RightDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightDropdownComponent]
    });
    fixture = TestBed.createComponent(RightDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
