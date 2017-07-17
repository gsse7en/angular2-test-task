import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service';

@Component({
  templateUrl: 'genious.component.html'
})
export class GeniousComponent implements OnInit {

  constructor(private persons: PersonsService) { }

  ngOnInit() {
    this.persons.currentAttribute = 'genious';
  }
}
