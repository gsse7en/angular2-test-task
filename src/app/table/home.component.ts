import { Component } from '@angular/core';
import { PersonsService } from '../persons.service';

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent {

  constructor(private persons: PersonsService) {}

}
