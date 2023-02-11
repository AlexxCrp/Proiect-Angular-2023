import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {
  firstName: string = '';
  lastName: string = '';
  animeQuote: {anime: string, character: string, quote: string};
  buttonClicked = false;

  constructor(private http: HttpClient) {}

  onButtonClick(firstName, lastName) {
    this.buttonClicked = true;
    this.firstName = firstName.value;
    this.lastName = lastName.value;
    this.animeQuote = this.getAnimeQuote();
  }

  getAnimeQuote()
  {
    var quote: {anime: string, character: string, quote: string} = {anime: '', character: '', quote: ''};
    this.http.get('https://animechan.vercel.app/api/random')
    .subscribe(data =>{
      quote.anime = data['anime'],
      quote.character = data['character'],
      quote.quote = data['quote']
    });

    console.log(quote);
    return quote;
  }
}
