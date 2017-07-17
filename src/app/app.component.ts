import { Component } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  length() {
    if (!localStorage['persons']) {
      localStorage['persons'] = '[]';
    }
    return JSON.parse(localStorage['persons']).length;
  }

  constructor(private persons: PersonsService) {}

}
