import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Book, List, User} from '../models';
import {BookService} from '../services/book.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'k-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  private latestNoteBooks: Book[] = [];
  private latestUsers: User[] = [];

  constructor(private bookService: BookService, private userService: UserService) {
    this.bookService.getLatestNotes().subscribe((list: List<Book>) => {
      this.latestNoteBooks = Object.keys(list).map(key => list[key]);
    });

    this.userService.getLatest().subscribe((list: List<User>) => {
      this.latestUsers = Object.keys(list).map(key => list[key]);
    });
  }
}

