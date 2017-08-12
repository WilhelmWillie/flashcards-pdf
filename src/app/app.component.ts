import { Component } from '@angular/core';

import jsPDF from 'jspdf';

import * as html2canvas from 'html2canvas';

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
      There are three ways to generate our PDF:
      1) Add text and data to our PDF programatically
      2) Import the HTML into our PDF document
      3) Convert our HTML to a canvas and put it in our PDF
    */

    /*
      Method 1: Add text and data to our PDF programatically
      Pros: More control as to how our data looks and is displayed
      Cons: Not as simple as the other solutions
    */

    /*
    for(let i=0;i<this.cards.length;i++) {
      let print = this.cards[i].term + ": " + this.cards[i].definition;
      doc.text(10, i*10+10, print);
    }
    */

    /*
      Method 2: Import the HTML into our PDF document
      Pros: Simple and easy
      Cons: Lack of control as to how it will look. No styling possible
    */

    /*
    doc.fromHTML(document.querySelector('.flashcards').innerHTML)
    */

    /*
      Method 3: Convert our HTML to a canvas and put it in our PDF
      Pros: Easy, will emulate the styles of our page
      Cons: This method is the equivalent of taking a screenshot of our flashcards and
      putting it in a PDF. Though it's easy to do and will copy our visual styles, the PDF
      doesn't have selectable text and is dependent on how the browser renders our elements
    */
    html2canvas(document.querySelector('.flashcards'), {
      onrendered: function(canvas) {
        const img = canvas.toDataURL('image/png'); 

        doc.addImage(img, 'PNG', 0, 0);
        doc.save('cards.pdf');
      }
    })
  }

  addCard(data) {
    this.cards.push({
      term: data.term,
      definition: data.definition
    })
  }
}
