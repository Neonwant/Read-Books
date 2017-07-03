import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BookService } from './services/book.service';
import { Book, List } from './models';

@Component({
  selector: 'k-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'k works';
  private latestNoteBooks: Book[];

  constructor(private bookService: BookService) {
      this.bookService.getLatestNotes().subscribe((list: List<Book>) => {
        this.latestNoteBooks = Object.keys(list).map(key => list[key]);
      })

  }

}
