import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { EditComponent } from './edit/edit.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { MainTableComponent } from './table/main-table.component';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddManagerComponent } from './add-manager/add-manager.component';
import { AddSalesmanComponent } from './add-salesman/add-salesman.component';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        EditComponent,
        MainTableComponent,
        AddComponent,
        AddManagerComponent,
        AddSalesmanComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        MatTableModule,
        ReactiveFormsModule
    ],
    providers: [
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
