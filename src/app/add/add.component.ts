import { Component } from '@angular/core';
import { PersonsService } from '../persons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  template: `
    <h1>Add New Person</h1>
    <form #addPersonForm="ngForm" (ngSubmit)="addPerson(addPersonForm.value)">
      <input 
        type="text" 
        name="name" 
        [(ngModel)]="personName" 
        placeholder="Enter name">

      <input 
        type="checkbox" 
        id="hasSuperPowers" 
        name="hasSuperPowers"  
        [ngModel]="this.persons.currentAttribute === 'hasSuperPowers'"
        (change)="getCheckboxChange($event, 'hasSuperPowers')">

      <label for="hasSuperPowers">Super Powers</label>

      <input 
        type="checkbox" 
        id="rich" 
        name="rich" 
        [ngModel]="this.persons.currentAttribute === 'rich'"
        (change)="getCheckboxChange($event, 'rich')">

      <label for="rich">Rich</label>

      <input 
        type="checkbox" 
        id="genious" 
        name="genious" 
        [ngModel]="this.persons.currentAttribute === 'genious'"
        (change)="getCheckboxChange($event, 'genious')">

      <label for="genious">Genious</label>

      <button type="submit">Add</button>
    </form>
  `,
  styles: [`
    form {
      margin-bottom: 20px;
    }
  `]
})
export class AddComponent {

  state = {
      hasSuperPowers:Boolean,
      rich:Boolean,
      genious:Boolean
  }
  
  getCheckboxChange(ev, value) {
    this.state[value] = ev.target.checked;
  }

  checkCurrentAttributeCheckboxStateBeforeSubmit(val) {
    if (val) {
      if (!this.state[val]) {
        this.router.navigate(['/']);
      }
    }
  }

  personName = '';

  addPerson(person) {
    this.persons.persons = JSON.parse(localStorage["persons"]);
    person.id = this.persons.persons.length;
    this.persons.persons.push(person);
    localStorage["persons"] = JSON.stringify(this.persons.persons);
    this.checkCurrentAttributeCheckboxStateBeforeSubmit(this.persons.currentAttribute);
    this.personName='';
  }

  constructor(private persons:PersonsService, private router:Router) { }

}
