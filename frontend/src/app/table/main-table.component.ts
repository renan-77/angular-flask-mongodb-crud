import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {DataService} from '../data.service';

@Component({
    selector: 'app-main-table',
    templateUrl: './main-table.component.html',
    styleUrls: ['./main-table.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MainTableComponent implements OnInit {
    tableDataSrc: any;
    tableCols: string[] = ['name', 'sex', 'address', 'actions'];

    displayedColumns: string[] = ['modification'];

    dbData: [];

    dataSource;

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.dataService.fetchData()
            .subscribe( dbData => {
                this.dbData = dbData;
                this.dataSource = new MatTableDataSource(this.dbData);
            });
    }

    deleteRecord(id: string, name: string): void {
        console.log('Inside delete function');
        if (confirm('Are you sure to delete ' + name)) {
            this.dataService.deletePerson(id);
            console.log('Deleted');
            this.ngOnInit();
        }
    }

}
