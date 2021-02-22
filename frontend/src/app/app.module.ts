import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { EditComponent } from './edit/edit.component';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { MainTableComponent } from './table/main-table.component';
import { AddComponent } from './add/add.component';
import { SafePipe } from './safe.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        EditComponent,
        CardComponent,
        MainTableComponent,
        AddComponent,
        SafePipe
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
