import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginApiCallService } from 'src/app/providers/login/login-api-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
    this.loginApiCallService.getAuthentication(username, password);
  }
}



