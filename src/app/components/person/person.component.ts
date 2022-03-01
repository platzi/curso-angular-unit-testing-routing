import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from './../../models/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {

  @Input() person!: Person;
  @Output() selected = new EventEmitter<Person>();
  imc = '';

  constructor() { }

  calcIMC() {
    this.imc = this.person.calcIMC();
  }

  onClick() {
    this.selected.emit(this.person);
  }

}
