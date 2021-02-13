import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    private readonly url: string = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any>{
      console.log('Sent Request');
      return this.http.get(this.url);
  }
}
