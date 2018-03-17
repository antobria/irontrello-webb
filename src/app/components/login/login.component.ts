import { SessionService } from './../../shared/services/session.services';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { User } from './../../shared/model/user.model';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  error: Object;
  modal: NgbModalRef;
  constructor(private modalService: NgbModal, private session: SessionService) { }
  open(content) {
    this.modal = this.modalService.open(content);
  }
  onSubmitLogin(form) {
    // tslint:disable-next-line:no-debugger
    this.session.login(this.user)
    .subscribe(
      (user) => { 
        this.user = user;
        this.modal.close();
      },
      (err) => this.error = err
    );
  }
  ngOnInit() {
  }

}
