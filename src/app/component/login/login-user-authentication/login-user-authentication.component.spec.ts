import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUserAuthenticationComponent } from './login-user-authentication.component';

describe('LoginUserAuthenticationComponent', () => {
  let component: LoginUserAuthenticationComponent;
  let fixture: ComponentFixture<LoginUserAuthenticationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginUserAuthenticationComponent]
    });
    fixture = TestBed.createComponent(LoginUserAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
