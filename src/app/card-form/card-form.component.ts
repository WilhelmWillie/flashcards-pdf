import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  @Output() addCard = new EventEmitter<Object>();

  newTerm : string;
  newDefinition: string;

  constructor() { }

  ngOnInit() {
  }

  formSubmit() {
    this.addCard.emit({
      term: this.newTerm,
      definition: this.newDefinition
    });

    // Reset form
    this.newTerm = "";
    this.newDefinition = "";
  }

}
