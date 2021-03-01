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

    personData: [];

    dataSource;

    constructor(private dataService: DataService, private router: Router) { }

    // Function to be called to refresh the table (loads the contents of the table).
    loadTable(): void {
        this.dataService.getPeople()
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
        // Confirm Box for deleting record.
        if (confirm('Are you sure to delete ' + name)) {
            this.dataService.deletePerson(id);
            console.log('Deleted');
            this.loadTable();
        }
        this.loadTable();
    }
}
