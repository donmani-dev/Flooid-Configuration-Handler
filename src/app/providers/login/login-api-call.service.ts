import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginApiCallService {

  constructor(private httpClient: HttpClient, private router: Router) { }
  getAuthentication(username: any, password: any) {
    return new Promise((resolve, reject) => {
      if (!username || !password) {
        console.log("Please enter a username and password.");
        reject("Please enter a username and password.");
        return;
      }

      const url = `http://localhost:8080/getUser/${username}/${password}`;

      this.httpClient.get(url, { responseType: "text" }).subscribe(
        (response: any) => {
          if (response !== "Password not matched") {
            console.log(response);
            this.router.navigate(['/Path']);
            resolve(response); // Resolve the Promise with the response
          } else {
            reject("Password not matched"); // Reject the Promise with an error message
          }
        },
        (error: any) => {
          console.log("Error occurred during the HTTP request:", error);
          reject(error); // Reject the Promise with the error
        }
      );
    });
  }
}
