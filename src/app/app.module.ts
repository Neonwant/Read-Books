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
import { YearSortPipe } from './pipes/year-sort.pipe';
import { BookSearchPipe } from './pipes/book-search.pipe';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, UserBookListComponent, BookComponent, YearSortPipe, BookSearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BookService, UserService, ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
