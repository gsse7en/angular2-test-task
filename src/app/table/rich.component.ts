import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service';
import { TableComponent } from './table.component';

@Component({
  templateUrl: 'rich.component.html'
})
export class RichComponent implements OnInit {

  constructor(private persons: PersonsService, private table: TableComponent) { }

  ngOnInit() {
    this.persons.currentAttribute = 'rich';
  }

}
