import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {
  @Input() card;

  constructor() { }

  ngOnInit() {
  }

}
