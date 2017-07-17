import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class PersonsService {
  persons = [];
  currentAttribute = '';
  state = {
      hasSuperPowers: Boolean,
      rich: Boolean,
      genious: Boolean
  }

  personName = '';

  popup: Boolean = false;
  id: Number;
  reversed: Boolean = true;

  length() {
    if (!localStorage['persons']) {
      localStorage['persons'] = '[]';
    }
    return JSON.parse(localStorage['persons']).length;
  }

  countAttributes(attribute) {
    return this.persons.filter((person) => person[attribute]).length;
  }

  checkAttributInPersons(attribute) {
    return this.persons.some(person => person[attribute])
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

  addPerson(person) {
    this.persons = JSON.parse(localStorage['persons']);
    person.id = this.persons.length;
    this.persons.push(person);
    localStorage['persons'] = JSON.stringify(this.persons);
    this.checkCurrentAttributeCheckboxStateBeforeSubmit(this.currentAttribute);
    this.personName = '';
  }

  clickOutsidePopup(click) {
    if (!click.path.some(function(element) {return element.id === 'confirm'; })) {
        this.popup = false;
      }
  }

  erasePerson(id) {
    this.persons.splice(this.persons.findIndex(person => person.id === id), 1);
    this.persons = this.persons.map(person => {
      if (person.id > id) {
        --person.id;
      }
      return person});

    localStorage['persons'] = JSON.stringify(this.persons);
    this.popup = false;
  }

  deletePersonInit(id) {
    this.popup = true;
    this.id = id;
  }

  onAttributeUpdate(event) {
    this.persons = this.persons.map(person => person.id === event.id ? event : person);
    localStorage['persons'] = JSON.stringify(this.persons);
  }

  fillPersons() {
    this.persons = JSON.parse(localStorage['persons']);
  }

  checkAttributeInPersons(attribute) {
    return this.persons.some(person => person[attribute])
  }

  sortBy(attribute) {
    const that = this;
    this.reversed = !this.reversed;
    this.persons.sort(function(a, b){
          return (a[attribute] === b[attribute] ? 0 : a[attribute] < b[attribute] ? -1 : 1) * (that.reversed ? -1 : 1);
    });
  }

  constructor(private router: Router) { }

}
