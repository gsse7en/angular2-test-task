import { Component } from '@angular/core';
import { PersonsService } from '../persons.service';
import { TableComponent } from './table.component';

@Component({
  template: `
    <table>
  <thead>
    <tr>
      <th (click)="table.sortByName('name')">Name</th>
      <th (click)="table.sortByName('hasSuperPowers')">SuperPower</th>
      <th (click)="table.sortByName('rich')">Rich</th>
      <th (click)="table.sortByName('genious')">Genious</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr 
      person-row 
      *ngFor="let person of persons.persons; let i = index" 
      [person]="person"
      (updateAttribute)="table.onUpdate($event)"
      (deletePersonEvent)="table.deletePersonInit($event)"
    ></tr>
  </tbody>
</table>
  `
})
export class HomeComponent {

  constructor(private persons:PersonsService, private table:TableComponent) {}

}
