import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service';
import { TableComponent } from './table.component';

@Component({
  templateUrl: 'genious.component.html'
})
export class GeniousComponent implements OnInit {

  constructor(private persons: PersonsService, private table: TableComponent) { }

  ngOnInit() {
    this.persons.currentAttribute = 'genious';
  }
}
