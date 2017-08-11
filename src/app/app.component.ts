import { Component } from '@angular/core';

import jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards = [
    {
      term: 'Blueberry',
      definition: 'A blue fruit.'
    },
    {
      term: 'Fish',
      definition: 'An animal that can swim.'
    }
  ]

  generatePDF() {
    let doc = new jsPDF();

    for(let i=0;i<this.cards.length;i++) {
      let print = this.cards[i].term + ": " + this.cards[i].definition;
      doc.text(10, i*10+10, print);
    }

    doc.save('cards.pdf');
  }

  addCard(data) {
    this.cards.push({
      term: data.term,
      definition: data.definition
    })
  }
}
