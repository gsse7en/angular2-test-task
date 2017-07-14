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
      <h4>with SuperPower {{countAttributes('hasSuperPowers')}}</h4>
    </a>
    <a href="/rich">
      <h4>Rich {{countAttributes('rich')}}</h4>
    </a>
    <a href="/genious">
      <h4>Genious {{countAttributes('genious')}}</h4>
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
  countAttributes(attribute) {
    return this.persons.persons.filter((person)=> person[attribute]).length;
  }  

  constructor(private persons:PersonsService) { }

}
