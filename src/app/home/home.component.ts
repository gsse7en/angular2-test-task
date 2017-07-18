import { Component } from '@angular/core';
import { PersonsService } from '../persons.service';
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: 'home.component.html'
})

export class HomeComponent {

  constructor(private persons: PersonsService) {}

}
