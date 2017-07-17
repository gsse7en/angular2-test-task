import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service';

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.css']
})

export class TableComponent implements OnInit {

  constructor(private persons: PersonsService) { }

  ngOnInit() {
    if (!localStorage['persons']) {
      localStorage['persons'] = '[]';
    }
    this.persons.fillPersons();
  }

}
