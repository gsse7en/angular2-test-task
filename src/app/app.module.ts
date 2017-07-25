import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from './table/table.module';
import { RouterModule } from '@angular/router';

import { PersonsService } from './persons.service';

import { AppComponent } from './app.component';
import { TotalComponent } from './total/total.component';
import { FilterComponent } from './filter/filter.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalComponent,
    FilterComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TableModule,
    RouterModule
  ],
  providers: [PersonsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
