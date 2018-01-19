import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCesiComponent } from './login-cesi.component';

describe('LoginCesiComponent', () => {
  let component: LoginCesiComponent;
  let fixture: ComponentFixture<LoginCesiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCesiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
