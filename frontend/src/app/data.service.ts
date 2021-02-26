import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    private readonly personUrl: string = 'http://localhost:5000/person/';

    private readonly managerUrl: string = 'http://localhost:5000/manager/';

    private readonly salesmanUrl: string = 'http://localhost:5000/salesman/';

    constructor(private http: HttpClient) {
    }

    fetchData(): Observable<any> {
        return this.http.get(this.personUrl);
    }

    fetchPerson(id: string): Observable<any>{
        const endPoints = `${id}`;
        console.log(this.personUrl + endPoints);
        return this.http.get(this.personUrl + endPoints);
    }

    deletePerson(id: string): void{
        const endPoints = `${id}`;
        console.log(this.personUrl + endPoints);
        this.http.delete(this.personUrl + endPoints).subscribe(data => {
            console.log('Successfully Delete ' + data);
        });
    }

    postPerson(person): void{
        console.log('In Person Post');
        this.http.post(this.personUrl, person).subscribe(data => {
            console.log('Posted');
        });
    }

    updatePerson(person): void{
        const endPoints = `${person._id}`;
        console.log('In Person Post');
        console.log(person);
        this.http.put(this.personUrl + endPoints, person).subscribe(data => {
            console.log('Posted');
        });
    }

    getSalesMan(): Observable<any>{
        return this.http.get(this.managerUrl);
    }

    postSalesman(person): void{
        console.log('In Salesman Post');
        this.http.post(this.salesmanUrl, person).subscribe(data => {
            console.log('Posted');
        });
    }

    postManager(person): void{
        console.log('In Manager Post');
        this.http.post(this.managerUrl, person).subscribe(data => {
            console.log('Posted');
        });
    }

}
