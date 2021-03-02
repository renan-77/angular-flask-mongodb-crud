import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {DataService} from '../data.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
    whichForm;

    personForm: FormGroup;

    managerForm;

    salesmanForm;

    constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

    genders;

    managers;

    // Checking which form the submit is from.
    onSubmit(person): void {
        console.log(person);
        if (this.whichForm === 'person') {
            console.log('Add Person');
            this.addPerson(person);
        }else if (this.whichForm === 'manager'){
            console.log('Add Manager');
            this.addManager(person);
        }else{
            console.log('Add Salesman');
            this.addSalesman(person);
        }

    }

    /**
     * Functions for submiting the form and posting it to the API.
     * Function calls from OnSubmit().
     * @param person - JSON Object with person details for POST from form.
     */
    addPerson(person): void {
        console.log(this.dataService.postPerson(person));
        this.router.navigate(['/home']);
    }

    addManager(person): void {
        console.log(this.dataService.postManager(person));
        this.router.navigate(['/home']);
    }

    addSalesman(person): void {
        console.log(this.dataService.postSalesman(person));
        this.router.navigate(['/home']);
    }


    ngOnInit(): void {
        this.whichForm = this.route.snapshot.paramMap.get('whichForm');

        console.log('This is the form you have: ' + this.whichForm);

        // Gathering GENDERS for dynamic dropdown display.
        this.dataService.getGenders().subscribe(genders => {
            this.genders = genders;
            console.log(this.genders);
        });

        // Gathering MANAGERS for dynamic dropdown display
        this.dataService.getManagers().subscribe(managers => {
            this.managers = managers;
            console.log(this.managers);
        });

        // PERSON form declaration.
        this.personForm = new FormGroup({
            name: new FormControl('', Validators.required),
            sex: new FormControl('', Validators.required),
            number: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
            street: new FormControl('', Validators.required),
            city: new FormControl('', Validators.required),
            eircode: new FormControl('', [Validators.required, Validators.maxLength(7)])
        });

        // MANAGER form declaration.
        this.managerForm = new FormGroup({
            name: new FormControl('', Validators.required),
            sex: new FormControl('', Validators.required),
            number: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
            street: new FormControl('', Validators.required),
            city: new FormControl('', Validators.required),
            eircode: new FormControl('', [Validators.required, Validators.maxLength(7)]),
            branch: new FormControl('', Validators.required),
            department: new FormControl('', Validators.required)
        });

        // SALESMAN form declaration.
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
