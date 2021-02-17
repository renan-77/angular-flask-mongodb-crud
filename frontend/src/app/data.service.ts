import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    private readonly url: string = 'http://localhost:5000/person';

    constructor(private http: HttpClient) {
    }

    fetchData(): Observable<any> {
        return this.http.get(this.url);
    }
}
