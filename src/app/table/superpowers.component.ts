import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service';
import { TableComponent } from './table.component';

@Component({
  templateUrl: "superpowers.component.html"
})
export class SuperPowersComponent implements OnInit {

  constructor(private persons:PersonsService, private table:TableComponent) { }

  ngOnInit() {
    this.persons.currentAttribute='hasSuperPowers';
  }
}
