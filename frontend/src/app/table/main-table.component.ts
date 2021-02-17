import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../data.service';

@Component({
    selector: 'app-main-table',
    templateUrl: './main-table.component.html',
    styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {
    tableDataSrc: any;
    tableCols: string[] = ['name', 'sex', 'address', 'id', 'actions'];

    dbData: [];

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.dataService.fetchData()
            .subscribe( dbData => {
                this.dbData = dbData;
            });
    }
}
