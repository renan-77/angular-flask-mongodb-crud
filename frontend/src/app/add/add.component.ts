import { Component, OnInit } from '@angular/core';
import { Person } from '../Person';
import { Sex } from '../Sex';
import { Address } from '../Address';

import {FormGroup, FormControl, Validators} from '@angular/forms';
import {DataService} from '../data.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
    maleModel = new Sex('602d3fe36b499e02cbf693ae', 'Male');
    femaleModel = new Sex('602a4ce33149eb362c29655f', 'Female');

    genderArray = [this.maleModel.gender, this.femaleModel.gender];

    addressModel = new Address(86, 'This street', 'Cork', 'T00W0F0');

    addressArray = [this.addressModel];

    personModel = new Person('Renan', this.maleModel, this.addressArray);

    submitted = false;

    personForm: FormGroup;

    constructor(private dataService: DataService, private router: Router) { }

    onSubmit(person): void {
        console.log(person);
        console.log(this.dataService.postPerson(person));
        this.router.navigate(['/home']);
    }

    get diagnostic(): string {
        return JSON.stringify(this.personModel);
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
