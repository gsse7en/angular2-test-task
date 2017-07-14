import { Component } from '@angular/core';
import { PersonsService } from '../persons.service';
import { TableComponent } from './table.component';

@Component({
  template: `
<table>
  <thead>
    <tr>
      <th (click)="table.sortBy('name')">Name</th>
      <th (click)="table.sortBy('hasSuperPowers')">SuperPower</th>
      <th (click)="table.sortBy('rich')">Rich</th>
      <th (click)="table.sortBy('genious')">Genious</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr 
      person-row 
      *ngFor="let person of persons.persons" 
      [person]="person"
      (updateAttribute)="table.onAttributeUpdate($event)"
      (deletePersonEvent)="table.deletePersonInit($event)"
    ></tr>
  </tbody>
</table>
  `
})
export class HomeComponent {

  constructor(private persons:PersonsService, private table:TableComponent) {}

}
