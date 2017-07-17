import { Component, Input } from '@angular/core';
import { PersonsService } from '../persons.service';
import { TableComponent } from './table.component';

@Component({
  selector: 'app-table-template',
  templateUrl: 'table-template.component.html'
})
export class TableTemplateComponent {

  @Input() attributeData;

  constructor(private persons: PersonsService, private table: TableComponent) {}

}
