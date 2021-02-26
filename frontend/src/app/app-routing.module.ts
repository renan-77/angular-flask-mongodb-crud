import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { RouterModule, Routes } from '@angular/router';
import {MainTableComponent} from './table/main-table.component';
import {AddComponent} from './add/add.component';
import {AddManagerComponent} from './add-manager/add-manager.component';
import {AddSalesmanComponent} from './add-salesman/add-salesman.component';

const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'edit/:id', component: EditComponent },
    { path: 'home', component: MainTableComponent },
    { path: 'add', component: AddComponent },
    { path: 'add-manager', component: AddManagerComponent },
    { path: 'add-salesman', component: AddSalesmanComponent }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
