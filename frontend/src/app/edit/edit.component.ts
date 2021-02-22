import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../data.service';
import {MatTableDataSource} from '@angular/material/table';
import {FormControl, FormGroup} from '@angular/forms';

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
        console.log(this.id);

        this.dataService.fetchPerson(this.id)
        .subscribe( dbData => {
            this.dbData = dbData;
            this.dbData = this.dbData[0];
            console.log(this.dbData);

            this.editForm = new FormGroup({
                _id: new FormControl(this.dbData.id),
                name: new FormControl(this.dbData.name),
                sex: new FormControl(this.dbData.sex.id),
                number: new FormControl(this.dbData.address.number),
                street: new FormControl(this.dbData.address.street),
                city: new FormControl(this.dbData.address.city),
                eircode: new FormControl(this.dbData.address.eircode)
            });
        });
    }

    onSubmit(person): void {
        console.log(person);
        console.log(this.dataService.updatePerson(person));
        // this.router.navigate(['/home']);
    }

}
