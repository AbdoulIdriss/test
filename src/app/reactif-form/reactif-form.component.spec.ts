import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactifFormComponent } from './reactif-form.component';

describe('ReactifFormComponent', () => {
  let component: ReactifFormComponent;
  let fixture: ComponentFixture<ReactifFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactifFormComponent]
    });
    fixture = TestBed.createComponent(ReactifFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
