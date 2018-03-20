import { List } from './../../shared/model/list.model';
import { Card } from './../../shared/model/card.model';
import { Component, OnInit } from '@angular/core';
import { CardService } from '../../shared/services/card.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  cards: Array<Card>;
  error: Object;
  lists: Array<List> = [{
    title: 'ToDo',
    cards: []
  },
  {
    title: 'Work In Progress',
    cards: []
  },
  {
    title: 'Done',
    cards: []
  }];

  constructor(private cardsession: CardService) { }

  ngOnInit() {
    this.cardsession.list()
    .subscribe(
      (cards) => {
      cards.forEach(card => {
        if (card.list === 'ToDo') {
          this.lists[0].cards.push(card);
        } else if (card.list === 'Work In Progress') {
          this.lists[1].cards.push(card);
        } else if (card.list === 'Done') {
          this.lists[2].cards.push(card);
        }
      });
      },
      (err) => this.error = err
    );
  }



}
