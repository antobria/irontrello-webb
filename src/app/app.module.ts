import { HttpModule } from '@angular/http';
import { SessionService } from './shared/services/session.services';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BoardComponent } from './components/board/board.component';
import { LoginComponent } from './components/login/login.component';
import { ModalComponent } from './components/modal/modal.component';
import { WorkInProgressComponent } from './components/work-in-progress/work-in-progress.component';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './components/cards/create/create.component';
import { CardService } from './shared/services/card.service';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/cards/card/card.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardComponent,
    LoginComponent,
    ModalComponent,
    WorkInProgressComponent,
    CreateComponent,
    ListComponent,
    CardComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SessionService, CardService, HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
