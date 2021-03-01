import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
export class AddManagerComponent implements OnInit {

    managerForm: FormGroup;

    genders;

    constructor(private dataService: DataService, private router: Router) { }

    onSubmit(person): void {
        console.log(person);
        console.log(this.dataService.postManager(person));
        this.router.navigate(['/home']);
    }


    ngOnInit(): void {
        this.dataService.getGenders().subscribe(genders => {
            this.genders = genders;
            console.log(this.genders);
        });

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
    }

}
