import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[person-row]',
  template: `
      <td>{{person.name}}</td>
      <td><input type="checkbox" [checked]="person.hasSuperPowers" [ngModel]="person.hasSuperPowers" (ngModelChange)="attributeChanged($event,'hasSuperPowers')"></td>
      <td><input type="checkbox" [checked]="person.rich" [ngModel]="person.rich" (ngModelChange)="attributeChanged($event, 'rich')"></td>
      <td><input type="checkbox" [checked]="person.genious" [ngModel]="person.genious" (ngModelChange)="attributeChanged($event, 'genious')"></td>
      <td><a (click)="deletePersonInit(person.id)">✖</a></td>
  `,
  styles: [`
    td {
      background-color:#eee;
      border: 1px solid #bbb;
    }
    a {
      cursor:pointer;
    }
  `]
})
export class RowComponent {
  @Input() person

  @Output() updateAttribute = new EventEmitter();
  @Output() deletePersonEvent = new EventEmitter();

  deletePersonInit(id) {
    this.deletePersonEvent.emit(this.person.id);
  }

  attributeChanged(ev,attribute) {
    this.person[attribute] = ev;
    this.updateAttribute.emit(this.person);
  }

  constructor() { }

}
