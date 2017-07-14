import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table.component';
import { HomeComponent } from './home.component';
import { RowComponent } from './row.component';
import { SuperPowersComponent } from './superpowers.component';
import { RichComponent } from './rich.component';
import { GeniousComponent } from './genious.component';

import { RouterModule } from '@angular/router';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'sp', component: SuperPowersComponent},
  {path: 'rich', component: RichComponent},
  {path: 'genious', component: GeniousComponent},
];

@NgModule({
  declarations: [
  	HomeComponent,
  	SuperPowersComponent,
  	RichComponent,
  	GeniousComponent,
    TableComponent,
    RowComponent
  ],
  imports:[CommonModule, FormsModule, RouterModule.forRoot(routes)],
  exports:[HomeComponent, SuperPowersComponent, RichComponent, GeniousComponent, TableComponent, RowComponent]
})
export class TableModule { }
