import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftDropdownComponent } from './left-dropdown.component';

describe('LeftDropdownComponent', () => {
  let component: LeftDropdownComponent;
  let fixture: ComponentFixture<LeftDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftDropdownComponent]
    });
    fixture = TestBed.createComponent(LeftDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
