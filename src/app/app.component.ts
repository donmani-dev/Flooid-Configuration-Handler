import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected username: string = "";
  protected password: string = "";
  constructor(
    private httpClient: HttpClient
  ) { }

  setUsername(event: any) {
    this.username = event.target.value;
  }

  setPassword(event: any) {
    this.password = event.target.value;
  }

  getFriends() {
    if (!this.username || !this.password) {
      console.log("Please enter a username and password.");
      return;
    }

    const url = `http://localhost:8080/getUser/${this.username}/${this.password}`;

    this.httpClient.get(url, { responseType: "text" }).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.log("Error occurred during the HTTP request:", error);
      }
    );
  }
}



