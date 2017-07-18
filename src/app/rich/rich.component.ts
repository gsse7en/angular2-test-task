import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service';
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: 'rich.component.html'
})

export class RichComponent implements OnInit {

  constructor(private persons: PersonsService) { }

  ngOnInit() {
    this.persons.state.currentAttribute = 'rich';
  }

}
