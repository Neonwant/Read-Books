import { ApiService } from './services/api.service';
import { BookService } from './services/book.service';
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { UserBookListComponent } from './components/user-book-list.component';
import { BookComponent } from './components/book.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, UserBookListComponent, BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BookService, UserService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
