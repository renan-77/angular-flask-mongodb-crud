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

    private readonly genderUrl: string = 'http://localhost:5000/sex/';

    constructor(private http: HttpClient) {
    }

    /**
     * Returns a observable with all the records in Person collection.
     */
    getPeople(): Observable<any> {
        return this.http.get(this.personUrl);
    }

    /**
     * Returns a observable with the specified record in Person collection.
     */
    getPerson(id: string): Observable<any>{
        const endPoints = `${id}`;
        console.log(this.personUrl + endPoints);
        return this.http.get(this.personUrl + endPoints);
    }

    /**
     * Deletes a specific record in Person collection.
     * @param id - ID of the user.
     */
    deletePerson(id: string): void{
        const endPoints = `${id}`;
        console.log(this.personUrl + endPoints);
        this.http.delete(this.personUrl + endPoints).subscribe(data => {
            console.log('Successfully Delete ' + data);
        });
    }

    /**
     * Creates new register of PERSON on the database.
     * @param person - A person JSON object from the form.
     */
    postPerson(person): void{
        console.log('In Person Post');
        this.http.post(this.personUrl, person).subscribe(data => {
            console.log('Posted');
        });
    }

    /**
     *  Updates PERSON on the database with provided data.
     * @param person - A person JSON object from the form.
     */
    putPerson(person): void{
        const endPoints = `${person._id}`;
        console.log('In Person Post');
        console.log(person);
        this.http.put(this.personUrl + endPoints, person).subscribe(data => {
            console.log('Posted');
        });
    }

    /**
     * Returns a observable with all the managers in Person collection.
     * (Used for register of new salesman).
     */
    getManagers(): Observable<any>{
        return this.http.get(this.managerUrl);
    }

    /**
     *  Creates new register of SALESMAN on the database.
     * @param person - A person JSON object from the form.
     */
    postSalesman(person): void{
        console.log('In Salesman Post');
        this.http.post(this.salesmanUrl, person).subscribe(data => {
            console.log('Posted');
        });
    }

    /**
     *  Creates new register of MANAGER on the database.
     * @param person - A person JSON object from the form.
     */
    postManager(person): void{
        console.log('In Manager Post');
        this.http.post(this.managerUrl, person).subscribe(data => {
            console.log('Posted');
        });
    }

    /**
     * Returns a observable with all the managers in Person collection.
     * (Used for register of new salesman).
     */
    getGenders(): Observable<any>{
        return this.http.get(this.genderUrl);
    }
}
