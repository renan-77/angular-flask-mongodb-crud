import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './main/app.component';
import { TableComponent } from './table/table.component';
import { LayoutComponent } from './layout/layout.component';
import { EditComponent } from './edit/edit.component';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {DataService} from './data.service';
import { DeleteComponent } from './delete/delete.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';

@NgModule({
    declarations: [
        AppComponent,
        TableComponent,
        LayoutComponent,
        EditComponent,
        CardComponent,
        DeleteComponent,
        FullscreenComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
