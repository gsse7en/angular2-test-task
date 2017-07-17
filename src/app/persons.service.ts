import { Injectable } from '@angular/core';

@Injectable()
export class PersonsService {
  persons = [];
  currentAttribute = '';

  length() {
    if (!localStorage['persons']) {
      localStorage['persons'] = '[]';
    }
    return JSON.parse(localStorage['persons']).length;
  }

  constructor() { }

}
