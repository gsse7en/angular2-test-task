import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service';
import { TableComponent } from './table.component';

@Component({
  template: `
<table *ngIf="table.checkAttributInPersons('rich')">
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
    <ng-container *ngFor="let person of persons.persons; let i = index">
      <tr 
        person-row 
         *ngIf="person.rich"
        [person]="person"
        (updateAttribute)="table.onUpdate($event)"
        (deletePersonEvent)="table.deletePersonInit($event)"
      ></tr>
     </ng-container>
  </tbody>
</table>
  `
})
export class RichComponent implements OnInit {

  constructor(private persons:PersonsService, private table:TableComponent) { }

  ngOnInit() {
    this.persons.currentAttribute='rich';
  }

}
