import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table.component';
import { HomeComponent } from '../home/home.component';
import { RowComponent } from './row.component';
import { SuperPowersComponent } from '../superpowers/superpowers.component';
import { RichComponent } from '../rich/rich.component';
import { GeniousComponent } from '../genious/genious.component';
import { TableTemplateComponent } from './table-template.component';

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
    RowComponent,
    TableTemplateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    HomeComponent,
    SuperPowersComponent,
    RichComponent,
    GeniousComponent,
    TableComponent,
    RowComponent,
    TableTemplateComponent
  ]
})

export class TableModule { }
