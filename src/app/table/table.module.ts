import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table.component';
import { HomeComponent } from './home.component';
import { RowComponent } from './row.component';
import { SuperPowersComponent } from './superpowers.component';
import { RichComponent } from './rich.component';
import { GeniousComponent } from './genious.component';
import appRoutes from '../app.routes';

@NgModule({
  declarations: [
  	HomeComponent,
  	SuperPowersComponent,
  	RichComponent,
  	GeniousComponent,
    TableComponent,
    RowComponent
  ],
  imports:[CommonModule, FormsModule, appRoutes],
  exports:[HomeComponent, SuperPowersComponent, RichComponent, GeniousComponent, TableComponent, RowComponent]
})
export class TableModule { }
