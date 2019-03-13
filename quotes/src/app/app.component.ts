import {Component, OnInit} from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Injectable()
export class AppComponent implements OnInit {
  title = 'Quotes Application';

  quote: string;
  author: string;
  quotesUrl = 'http://quotes-svc:38070/quote';

  constructor(private http: HttpClient) {
    this.quote = "Ala ma kota";
    this.author = "Ala";
  }

  ngOnInit() {
    // this.randomize();
  }

  randomize() {
    this.getRandomQuote()
      .subscribe((data) => {
        this.quote = data['content'];
        this.author = data['author'];
      });
  }

  getRandomQuote() {
    return this.http.get(this.quotesUrl);
  }
}
