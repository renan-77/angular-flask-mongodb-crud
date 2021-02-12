import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()

export class DataService {

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any>{
      return this.http.get('http://localhost:5000/api');
  }

}
