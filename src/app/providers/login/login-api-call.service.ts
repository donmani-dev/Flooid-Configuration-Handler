import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginApiCallService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  getAuthentication(username: any, password: any): Observable<any> {
    return new Observable<boolean>((observer) => {
      const url = `http://localhost:8080/getUser/${username}/${password}`;
      this.httpClient.get(url, { responseType: "text" }).subscribe((response) => {
        if (response !== "Password not matched") {
          console.log(response);
          observer.next(true);
        } else {
          observer.next(false);
        }
        observer.complete();
      }, (error) => {
        observer.error(error);
      });
    });
  }

  routeToConfigPage()
  {
    this.router.navigate(['/ConfigurationChange']);
  }
}
