import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from './table/table.module';

import { PersonsService } from './persons.service';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { TotalComponent } from './total/total.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    TotalComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    TableModule,
  ],
  providers: [PersonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
