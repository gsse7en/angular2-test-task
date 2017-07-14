import { Injectable } from '@angular/core';

@Injectable()
export class PersonsService {
	persons = [];
	currentAttribute = '';
  constructor() { }

}
