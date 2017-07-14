import { Component } from '@angular/core';
import { PersonsService } from '../persons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: "add.component.html",
  styleUrls: ["add.component.css"]
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
