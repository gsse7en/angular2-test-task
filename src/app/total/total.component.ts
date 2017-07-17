import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service';

@Component({
  selector: 'app-total',
  templateUrl: 'total.component.html',
  styleUrls: ['total.component.css']
})

export class TotalComponent {

  constructor(private persons: PersonsService) { }

}
