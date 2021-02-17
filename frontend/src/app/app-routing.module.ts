import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { RouterModule, Routes } from '@angular/router';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import {MainTableComponent} from './table/main-table.component';
import {AddComponent} from './add/add.component';

const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'edit', component: EditComponent },
    { path: 'fullscreen', component: FullscreenComponent },
    { path: 'home', component: MainTableComponent },
    { path: 'add', component: AddComponent }
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
