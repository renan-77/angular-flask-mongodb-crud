import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {DataService} from '../data.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
    personForm: FormGroup;

    constructor(private dataService: DataService, private router: Router) { }

    onSubmit(person): void {
        console.log(person);
        console.log(this.dataService.postPerson(person));
        this.router.navigate(['/home']);
    }


    ngOnInit(): void {
        this.personForm = new FormGroup({
            name: new FormControl('', Validators.required),
            sex: new FormControl('', Validators.required),
            number: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
            street: new FormControl('', Validators.required),
            city: new FormControl('', Validators.required),
            eircode: new FormControl('', Validators.required)
        });
    }

}
