import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Book } from '../models';

@Component({
  selector: 'k-book',
  templateUrl: './book.component.html'
})
export class BookComponent {
  @Input() book: Book;
  constructor() {

  }
}

