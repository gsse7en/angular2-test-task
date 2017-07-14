import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service';
import { TableComponent } from './table.component';

@Component({
  template: `
<table *ngIf="table.checkAttributeInPersons('genious')">
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
    <ng-container *ngFor="let person of persons.persons">
      <tr 
        person-row 
         *ngIf="person.genious"
        [person]="person"
        (updateAttribute)="table.onAttributeUpdate($event)"
        (deletePersonEvent)="table.deletePersonInit($event)"
      ></tr>
     </ng-container>
  </tbody>
</table>
  `
})
export class GeniousComponent implements OnInit {

  constructor(private persons:PersonsService, private table:TableComponent) { }
  
  ngOnInit() {
    this.persons.currentAttribute='genious';
  }
}
