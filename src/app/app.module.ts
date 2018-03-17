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
import { TodoComponent } from './components/todo/todo.component';
import { WorkInProgressComponent } from './components/work-in-progress/work-in-progress.component';
import { DoneComponent } from './components/done/done.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardComponent,
    LoginComponent,
    ModalComponent,
    TodoComponent,
    WorkInProgressComponent,
    DoneComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SessionService, HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
