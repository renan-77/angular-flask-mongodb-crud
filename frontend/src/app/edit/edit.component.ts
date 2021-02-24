import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../data.service';
import {MatTableDataSource} from '@angular/material/table';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    id: string;

    dbData;

    editForm: FormGroup;

    constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) { }

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id');
        // console.log(this.id);

        // Gathering DATA from API.
        this.dataService.fetchPerson(this.id)
        .subscribe( dbData => {
            // Assigning fetched data to variable.
            this.dbData = dbData;
            // Unwinding JSON object from array.
            this.dbData = this.dbData[0];
            console.log(this.dbData);

            // Creating the form for PUT.
            // Form is autofilled by values gathered from API.
            this.editForm = new FormGroup({
                _id: new FormControl(this.dbData.id, Validators.required),
                name: new FormControl(this.dbData.name, Validators.required),
                sex: new FormControl(this.dbData.sex.id, Validators.required),
                // Validators to make sure numbers are in the field.
                number: new FormControl(this.dbData.address.number, [Validators.required, Validators.pattern('^[0-9]*$')]),
                street: new FormControl(this.dbData.address.street, Validators.required),
                city: new FormControl(this.dbData.address.city, Validators.required),
                eircode: new FormControl(this.dbData.address.eircode, Validators.required)
            });
        });
    }

    onSubmit(person): void {
        // Creating JSON object for the format that PUT needs.
        const updateData = {
            address: [{
                // Keeping the data consistent, on change, ID stays the same.
                _id: this.dbData.address.id,
                city: person.city,
                number: person.number,
                street: person.street,
                eircode: person.eircode
            }],
            _id: person._id,
            name: person.name,
            sex: person.sex
        };

        console.log(updateData);
        // Calling PUT.
        console.log(this.dataService.updatePerson(updateData));
        // Redirecting to home page.
        this.router.navigate(['/home']);
    }

}
