import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[person-row]',
  templateUrl: 'row.component.html',
  styleUrls: ['row.component.css']
})
export class RowComponent {
  @Input() person

  @Output() updateAttribute = new EventEmitter();
  @Output() deletePersonEvent = new EventEmitter();

  deletePersonInit(id) {
    this.deletePersonEvent.emit(this.person.id);
  }

  attributeChanged(ev, attribute) {
    this.person[attribute] = ev;
    this.updateAttribute.emit(this.person);
  }

  constructor() { }

}
