import { Component } from '@angular/core';
import { PersonsService } from '../persons.service';
import { TableComponent } from './table.component';

@Component({
  templateUrl: "home.component.html"
})
export class HomeComponent {

  constructor(private persons:PersonsService, private table:TableComponent) {}

}
