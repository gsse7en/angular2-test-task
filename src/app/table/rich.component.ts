import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service';

@Component({
  templateUrl: 'rich.component.html'
})
export class RichComponent implements OnInit {

  constructor(private persons: PersonsService) { }

  ngOnInit() {
    this.persons.currentAttribute = 'rich';
  }

}
