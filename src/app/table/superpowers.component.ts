import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service';

@Component({
  templateUrl: 'superpowers.component.html'
})

export class SuperPowersComponent implements OnInit {

  constructor(private persons: PersonsService) { }

  ngOnInit() {
    this.persons.state.currentAttribute = 'hasSuperPowers';
  }

}
