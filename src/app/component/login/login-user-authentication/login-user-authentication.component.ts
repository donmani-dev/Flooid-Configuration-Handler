import { Component } from '@angular/core';
import { LoginApiCallService } from 'src/app/providers/login/login-api-call.service';

@Component({
  selector: 'app-login-user-authentication',
  templateUrl: './login-user-authentication.component.html',
  styleUrls: ['./login-user-authentication.component.css']
})
export class LoginUserAuthenticationComponent {
  protected username: string = "";
  protected password: string = "";
  constructor(private loginApiCallService: LoginApiCallService) { }

  setUsername(event: any) {
    this.username = event.target.value;
  }

  setPassword(event: any) {
    this.password = event.target.value;
  }

  getAuthentication(username: any, password: any) {
    this.loginApiCallService.getAuthentication(username, password)
  .then((response: any) => {
    console.log(response); // Handle the response
  })
  .catch((error: any) => {// Handle the error
  });
  }
}
