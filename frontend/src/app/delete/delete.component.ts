import {Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import {DataService} from '../data.service';

@Component({
    selector: 'app-delete',
    templateUrl: './delete.component.html',
    styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
    @Input()
    result$: Observable<any>;

    constructor(private dataService: DataService) {
        this.result$ = this.dataService.fetchData();
    }

    ngOnInit(): void {

    }

}
