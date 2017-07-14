import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: "table.component.html",
  styleUrls: ["table.component.css"]
})

@Injectable()
export class TableComponent implements OnInit {
  popup:Boolean = false;
  id:Number;
  reversed: boolean = true;

  clickOutsidePopup(click) {
    if (!click.path.some(function(element) {return element.id === 'confirm';})) 
      {
        this.popup=false;
      }
  }

  erasePerson(id) {
    this.persons.persons.splice(this.persons.persons.findIndex(person => person.id === id), 1); 
    this.persons.persons = this.persons.persons.map(person=> { 
      if (person.id > id) {
        --person.id; 
      } 
      return person});

    localStorage["persons"] = JSON.stringify(this.persons.persons);
    this.popup = false;
  }

  deletePersonInit(id) {
    this.popup = true;
    this.id = id;
  }

  onAttributeUpdate(event) {
    this.persons.persons = this.persons.persons.map(person => person.id === event.id? event : person);
    localStorage["persons"] = JSON.stringify(this.persons.persons);
  }

  fillPersons() {
    this.persons.persons = JSON.parse(localStorage["persons"]);
  }

  checkAttributeInPersons(attribute) {
    return this.persons.persons.some(person=> person[attribute])
  }

  sortBy(attribute) {
    const that = this;
    this.reversed = !this.reversed;
    this.persons.persons.sort(function(a,b){
          return (a[attribute]===b[attribute] ? 0 : a[attribute] < b[attribute]? -1 : 1) * (that.reversed ? -1 : 1);
    });
  }

  constructor(private persons:PersonsService) { }

  ngOnInit() {
    if (!localStorage["persons"]) {
      localStorage["persons"] = "[]";
    }
    this.fillPersons();
  }

}
