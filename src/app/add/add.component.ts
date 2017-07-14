import { Component } from '@angular/core';
import { PersonsService } from '../persons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  template: `
    <h1>Add New Person</h1>
    <form #addPersonForm="ngForm" (ngSubmit)="addPerson(addPersonForm.value)">
      <input type="text" name="name" [(ngModel)]="personname" placeholder="Enter name">

      <input type="checkbox" id="hasSuperPowers" name="hasSuperPowers"  
      [ngModel]="checkAttribute(this.persons.currentAttribute, 'hasSuperPowers')"
      (change)="getChange($event, 'hasSuperPowers')">

      <label for="hasSuperPowers">Super Powers</label>

      <input type="checkbox" id="rich" name="rich" 
      [ngModel]="checkAttribute(this.persons.currentAttribute, 'rich')"
      (change)="getChange($event, 'rich')">

      <label for="rich">Rich</label>

      <input type="checkbox" id="genious" name="genious" 
      [ngModel]="checkAttribute(this.persons.currentAttribute, 'genious')"
      (change)="getChange($event, 'genious')">

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
  
  getChange(ev, value) {
    this.state[value] = ev.target.checked;
  }

  checkAttribute(current,name){
    return current===name;
  }

  checkAttributeBeforeSubmit(val) {
    if (val) {
      if (!this.state[val]) {
        this.router.navigate(['/']);
      }
    }
  }

  personname = '';

  addPerson(person) {
    this.persons.persons = JSON.parse(localStorage["persons"]);
    person.id = this.persons.persons.length;
    this.persons.persons.push(person);
    localStorage["persons"] = JSON.stringify(this.persons.persons);
    this.checkAttributeBeforeSubmit(this.persons.currentAttribute);
    this.personname='';
  }

  constructor(private persons:PersonsService, private router:Router) { }

}
