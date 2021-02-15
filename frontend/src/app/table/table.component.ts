import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    confirmDeletion(name: string): void {
        if (confirm('Are you sure to delete ' + name)) {
            console.log('Implement delete functionality here');
        }
    }

}
