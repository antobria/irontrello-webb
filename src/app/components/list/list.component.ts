import { List } from './../../shared/model/list.model';
import { Component, OnInit } from '@angular/core';
import { Card } from './../../shared/model/card.model';
import { CardService } from '../../shared/services/card.service';
import { Input } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()list: List;
  error: Object;

  constructor(private cardsession: CardService) { }

  ngOnInit() {
  }
}
