import { Component } from '@angular/core';
import { PersonsService } from '../persons.service';

@Component({
  selector: 'app-add',
  templateUrl: 'add.component.html',
  styleUrls: ['add.component.css']
})
export class AddComponent {

  constructor(private persons: PersonsService) { }

}
