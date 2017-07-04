import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BookService } from './services/book.service';
import { UserService } from './services/user.service';
import {Book, List, User} from './models';

@Component({
  selector: 'k-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'k works';
  private latestNoteBooks: Book[];
  private latestUsers: User[];
  private err;
  constructor(private bookService: BookService, private userService: UserService) {
      this.bookService.getLatestNotes().subscribe(
        (list: List<Book>) => {
          this.latestNoteBooks = Object.keys(list).map(key => list[key]);
        }, err => {
          this.err = err;
        });

    this.userService.getLatest().subscribe(
      (list: List<User>) => {
        this.latestUsers = Object.keys(list).map(key => list[key]);
      }, err => {
        this.err = err;
      });
  }

}
