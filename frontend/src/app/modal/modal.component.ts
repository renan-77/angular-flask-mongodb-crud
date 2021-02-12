import {Component, Input, OnInit} from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
    apiResponse;

    constructor(private dataService: DataService) { }

    fetchData(): void{
        this.apiResponse = this.dataService.fetchData();
    }

    ngOnInit(): void {
    }

}
