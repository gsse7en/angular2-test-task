import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service';

@Component({
  selector: 'app-total',
  template: `
    <a href="/">
      <h1>
        Total:
      </h1>
      <h3>TotalPersons: {{persons.persons.length}}</h3>
    </a>
    <a href="/sp">
      <h4>with SuperPower {{countAbilities('hasSuperPowers')}}</h4>
    </a>
    <a href="/rich">
      <h4>Rich {{countAbilities('rich')}}</h4>
    </a>
    <a href="/genious">
      <h4>Genious {{countAbilities('genious')}}</h4>
    </a>
  `,
  styles: [`
    a {
      color: black;
      text-decoration: none;
    }
  `]
})
export class TotalComponent {
  countAbilities(ability) {
    return this.persons.persons.filter((person)=> person[ability]).length;
  }  

  constructor(private persons:PersonsService) { }

}
