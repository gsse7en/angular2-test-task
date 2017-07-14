import { Component } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-root',
  template: `
	 <div class="wrapper">
	  <div class="main">
	    <div class="add">
	      <app-add></app-add>
	    </div>
	    <div class="table">
	      <app-table *ngIf="length()"></app-table>
	    </div>
	    <div class="filter">
	      <app-filter *ngIf="length()"></app-filter>
	    </div>
	  </div>
	  <div class="sidebar">
	    <app-total></app-total>
	  </div>
	</div> 
  `,
  styles: [`
	.main {
		display:inline-block;
		margin-right: 40px;
	}

	.sidebar {
		display:inline-block;
		vertical-align: top;
	}
  `]
})
export class AppComponent {

	length() {
		return JSON.parse(localStorage['persons']).length;
	}

	constructor(private persons:PersonsService) {}

}
