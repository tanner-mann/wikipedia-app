import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkPageComponent } from './talk-page.component';

describe('TalkPageComponent', () => {
  let component: TalkPageComponent;
  let fixture: ComponentFixture<TalkPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TalkPageComponent]
    });
    fixture = TestBed.createComponent(TalkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
