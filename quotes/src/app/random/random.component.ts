import {Component, OnDestroy, OnInit} from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
@Injectable()
export class RandomComponent implements OnInit {

  quote: string;
  author: string;
  quotesUrl = 'http://localhost:8070/quote';

  constructor(private http: HttpClient) {
    this.quote = "";
    this.author = "";
  }

  ngOnInit() {
    this.randomize();
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
