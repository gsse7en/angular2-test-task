import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table.component';
import { RowComponent } from './row.component';
import { TableTemplateComponent } from './table-template.component';
import { FilteredTableComponent } from './filtered-table.component';

const routes = [
  {path: '', component: FilteredTableComponent},
  {path: ':attr', component: FilteredTableComponent}
];

@NgModule({
  declarations: [
    TableComponent,
    RowComponent,
    TableTemplateComponent,
    FilteredTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    TableComponent,
    RowComponent,
    TableTemplateComponent,
    FilteredTableComponent
  ]
})

export class TableModule { }
