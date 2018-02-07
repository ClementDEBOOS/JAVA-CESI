import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBddComponent } from './form-bdd.component';

describe('FormBddComponent', () => {
  let component: FormBddComponent;
  let fixture: ComponentFixture<FormBddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
