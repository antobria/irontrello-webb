
import { Card } from './../model/card.model';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class CardService {
  private static readonly BASE_API = `${environment.baseApi}`;
  private static defaultHeaders: Headers = new Headers({ 'Content-Type': 'application/json' });
  private static defaultOptions: RequestOptions = new RequestOptions({ headers: CardService.defaultHeaders, withCredentials: true });

  private cards: Array<Card>;

  constructor(private http: Http) { 
    this.cards = [];
  }
  handleError(e) {
    return Observable.throw(e.json().message);
  }
  create(card: Card) {
    return this.http.post(`${CardService.BASE_API}/cards/`, JSON.stringify(card), CardService.defaultOptions)
      .map(res => res.json())
      .catch(this.handleError);
  }

  list() {
    return this.http.get(`${CardService.BASE_API}/cards/`, CardService.defaultOptions)
    .map(res => res.json())
    .catch(this.handleError);
  }

}
