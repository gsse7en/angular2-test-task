import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'filtered-table.component.html',
})

export class FilteredTableComponent implements OnInit {

  isHomePage;
  attributes = [
    { path: undefined, attribute: '' },
    { path: 'sp', attribute: 'hasSuperPowers' },
    { path: 'rich', attribute: 'rich' },
    { path: 'genious', attribute: 'genious' }
  ];

  getData() {
    return {
      attribute:  this.persons.state.currentAttribute,
      isHomePage: this.isHomePage
    };
  }

  constructor(private persons: PersonsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.isHomePage = this.route.snapshot.params.attr ? false : true;
    this.persons.state.currentAttribute = this.attributes.find(attr => attr.path === this.route.snapshot.params.attr).attribute;
  }

}
