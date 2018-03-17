import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { CardService } from './../../../shared/services/card.service';
import { Card } from './../../../shared/model/card.model';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  card: Card = new Card();
  error: Object;
  modal: NgbModalRef;
  constructor(private modalService: NgbModal, private cardsession: CardService) { }

  open(content) {
    this.modal = this.modalService.open(content);
  }

  onSubmitCreate() {
    this.cardsession.create(this.card)
      .subscribe(
        (card) => {
          this.card = card;
          this.modal.close();
        },
        (err) => this.error = err
      );
  }

  ngOnInit() {
  }

}
