import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-salesman',
  templateUrl: './add-salesman.component.html',
  styleUrls: ['./add-salesman.component.css']
})
export class AddSalesmanComponent implements OnInit {
    salesmanForm: FormGroup;

    managers;

    genders;

    constructor(private dataService: DataService, private router: Router) { }

    onSubmit(person): void {
        console.log(person);
        console.log(this.dataService.postSalesman(person));
        this.router.navigate(['/home']);
    }

    ngOnInit(): void {
        this.dataService.getManagers().subscribe(managers => {
            this.managers = managers;
            console.log(this.managers);
        });

        this.dataService.getGenders().subscribe(genders => {
            this.genders = genders;
            console.log(this.genders);
        });

        this.salesmanForm = new FormGroup({
            name: new FormControl('', Validators.required),
            sex: new FormControl('', Validators.required),
            number: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
            street: new FormControl('', Validators.required),
            city: new FormControl('', Validators.required),
            eircode: new FormControl('', [Validators.required, Validators.maxLength(7)]),
            working_hours: new FormControl(40),
            manager: new FormControl('', Validators.required),
            base_salary: new FormControl('', Validators.required),
            commission: new FormControl('', Validators.required),
            branch: new FormControl('', Validators.required)
        });
    }
}
