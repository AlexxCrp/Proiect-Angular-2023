import { Component } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {
  text = '';

  onButtonClick() {
    this.text = 'This is the text that will fill the rectangle when the button is pressed. Salut aici mai e niste text';

  }
}
