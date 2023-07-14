import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { properties } from 'src/app/models/properties';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor(private http:HttpClient) { }

  getProperties(): Observable<any>
  {
      return new Observable<string>((observer) => {
        const url = `/api/properties`;
        this.http.get<properties[]>(url).subscribe(
          (response: any) => {
            observer.next(response);
            observer.complete();
          },
          (error: any) => {
            observer.error(error);
            observer.complete();
          }
        );
      });
  }
}
