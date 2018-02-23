import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRepeatComponent } from './form-repeat.component';

describe('FormRepeatComponent', () => {
  let component: FormRepeatComponent;
  let fixture: ComponentFixture<FormRepeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRepeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRepeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
