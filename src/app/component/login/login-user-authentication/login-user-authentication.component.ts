import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginApiCallService } from 'src/app/providers/login/login-api-call.service';
import { PropertiesService } from 'src/app/providers/properties/properties.service';

@Component({
  selector: 'app-login-user-authentication',
  templateUrl: './login-user-authentication.component.html',
  styleUrls: ['./login-user-authentication.component.css']
})
export class LoginUserAuthenticationComponent {
  protected username: string = "";
  protected password: string = "";
  protected error: string = "";
  constructor(private loginApiCallService: LoginApiCallService) { }

   getAuthentication(username: any, password: any) {
    if (!username || !password) {
      this.error = "Please enter a username and password.";
      return;
    }
  
      this.loginApiCallService.getAuthentication(username, password).subscribe(
      (result: boolean) => {
        if (result === true) {
          this.loginApiCallService.routeToConfigPage()
        } else {
          console.log("sdfs")
          this.error = "Please enter correct username and password";
        }
      },
      (error: any) => {
        this.error = "Please enter correct username and password";
      }
    );
  }
}