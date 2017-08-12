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
    term: 'Java',
    definition: 'A programming language that is also the name of coffee'
  },
  {
    term: 'Python',
    definition: 'Programming language named after a snake'
  },
  {
    term: 'C++',
    definition: 'A very interesting language that\'s kind of a pain'
  }]
  
  generatePDF() {
    let doc = new jsPDF();

    /*
    for(let i=0;i<this.cards.length;i++) {
      let print = this.cards[i].term + ": " + this.cards[i].definition;
      doc.text(10, i*10+10, print);
    }
    */

    doc.fromHTML(document.querySelector('.flashcards').innerHTML)

    doc.save('cards.pdf');
  }

  addCard(data) {
    this.cards.push({
      term: data.term,
      definition: data.definition
    })
  }
}
