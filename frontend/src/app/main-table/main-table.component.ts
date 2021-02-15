import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
    selector: 'app-main-table',
    templateUrl: './main-table.component.html',
    styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {
    tableDataSrc: any;
    tableCols: string[] = ['name', 'role', 'skill_set'];
    tableData: {}[] = [{
        name: 'Harsha Chinni',
        role: 'Fullstack Developer',
        skill_set: 'Angular 9, Python 3, Flask, DSA'
    },
        {
            name: 'Bob',
            role: 'HR',
            skill_set: 'Finding awesomee candidates like Harsha :P'
        },
        {
            name: 'COVID-19',
            role: 'Making people panic',
            skill_set: 'Infect people'
        }
    ];

    constructor() { }

    ngOnInit(): void {
        this.tableDataSrc = new MatTableDataSource(this.tableData);
    }

}
