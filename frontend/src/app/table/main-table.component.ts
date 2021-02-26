import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-main-table',
    templateUrl: './main-table.component.html',
    styleUrls: ['./main-table.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MainTableComponent implements OnInit {
    tableDataSrc: any;
    tableCols: string[] = ['name', 'sex', 'address', 'class', 'branch', 'actions'];

    displayedColumns: string[] = ['modification'];

    personData: [];

    dataSource;

    constructor(private dataService: DataService, private router: Router) { }

    loadTable(): void {
        this.dataService.fetchData()
            .subscribe( dbData => {
                this.personData = dbData;
                console.log(this.personData);
                this.dataSource = new MatTableDataSource(this.personData);
            });
    }

    ngOnInit(): void {
        this.loadTable();
    }

    deleteRecord(id: string, name: string): void {
        console.log('Inside delete function');
        if (confirm('Are you sure to delete ' + name)) {
            this.dataService.deletePerson(id);
            console.log('Deleted');
            this.loadTable();

        }
        this.loadTable();
    }

}
