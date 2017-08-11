import { Component } from '@angular/core';

import jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    let doc = new jsPDF();
    doc.text("Hello", 20, 20);
    doc.save("basic.pdf");
  }
}
