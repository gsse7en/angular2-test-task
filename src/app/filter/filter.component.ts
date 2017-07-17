import { Component } from '@angular/core';
import { PersonsService } from '../persons.service';

@Component({
  selector: 'app-filter',
  templateUrl: 'filter.component.html',
  styleUrls: ['filter.component.css']
})
export class FilterComponent {

  checkAttributInPersons(attribute) {
    return this.persons.persons.some(person => person[attribute])
  }

  constructor(private persons: PersonsService) { }

}
