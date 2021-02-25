import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    private readonly url: string = 'http://localhost:5000/person/';

    constructor(private http: HttpClient) {
    }

    fetchData(): Observable<any> {
        return this.http.get(this.url);
    }

    fetchPerson(id: string): Observable<any>{
        const endPoints = `${id}`;
        console.log(this.url + endPoints);
        return this.http.get(this.url + endPoints);
    }

    deletePerson(id: string): void{
        const endPoints = `${id}`;
        console.log(this.url + endPoints);
        this.http.delete(this.url + endPoints).subscribe(data => {
            console.log('Successfully Delete ' + data);
        });
    }

    postPerson(person): void{
        console.log('In Person Post');
        this.http.post(this.url, person).subscribe(data => {
            console.log('Posted');
        });
    }

    updatePerson(person): void{
        const endPoints = `${person._id}`;
        console.log('In Person Post');
        console.log(person);
        this.http.put(this.url + endPoints, person).subscribe(data => {
            console.log('Posted');
        });
    }

}
