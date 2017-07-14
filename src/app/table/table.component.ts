import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-table',
  template: `
    <router-outlet></router-outlet>
    <div id="cover" *ngIf="this.popup" (click)="clickOutsidePopup($event)">
      <div id="confirm" >
        <h2>confirm delete action</h2>
        <button (click)="erasePerson(this.id)">ok</button><button (click)="this.popup=false">cancel</button>
      </div>
    </div>
  `,
  styles: [`
    :host >>> table {
      border-collapse: collapse;
    }
    :host >>> th {
      border: 1px solid #bbb;
      padding-right:40px;
    }
    :host >>> th:not(:last-child) {
      cursor: pointer;
    }
    #confirm {
      position: fixed;
      top:40vh;
      left:40vw;
      border: 1px solid black;
      z-index:3;
      padding: 20px;
      margin: 20px;
      background-color:#fefefe;
    }
    #cover{
      position:fixed;
      top:0;
      left:0;
      background:rgba(0,0,0,0.6);
      z-index:1;
      width:100%;
      height:100%;
    }
  `]
})

@Injectable()
export class TableComponent implements OnInit {
  popup:Boolean = false;
  id:Number;

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

  reversed: boolean = true;

  sortBy(attribute) {
    const that = this;
    this.reversed = !this.reversed;
    this.persons.persons.sort(function(a,b){
          return (a[attribute]===b[attribute] ? 0 : a[attribute] < b[attribute]? -1 : 1) * (that.reversed ? -1 : 1);
    });
  }

  constructor(private persons:PersonsService) { }

  ngOnInit() {
    this.fillPersons();
  }

}
