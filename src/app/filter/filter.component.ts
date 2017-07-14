import { Component } from '@angular/core';
import { PersonsService } from '../persons.service';

@Component({
  selector: 'app-filter',
  template: `
    <p>
      Filters:
      <a href="/sp" [class]="checkAttributInPersons('hasSuperPowers')?'':'inactive'">Super Power</a>
      <a href="/rich" [class]="checkAttributInPersons('rich')?'':'inactive'">Rich</a>
      <a href="/genious" [class]="checkAttributInPersons('genious')?'':'inactive'">Genious</a>
    </p>
  `,
  styles: [`
    a {
      margin-left: 15px;
      color: SteelBlue;
      text-decoration: none;
    }

    .inactive {
      color: #ddd;
      pointer-events: none;
      cursor: default;
    }
  `]
})
export class FilterComponent {

  checkAttributInPersons(attribute) {
    return this.persons.persons.some(person=> person[attribute])
  }

  constructor(private persons:PersonsService) { }

}
