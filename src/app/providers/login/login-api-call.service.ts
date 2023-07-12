import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginApiCallService {

  constructor(private httpClient: HttpClient) { }
  getAuthentication(username: any, password: any) {
    if (!username || !password) {
      console.log("Please enter a username and password.");
      return;
    }

    const url = `http://localhost:8080/getUser/${username}/${password}`;

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
