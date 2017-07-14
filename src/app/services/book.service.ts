import { ApiService } from './api.service';
import { Book, List } from '../models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable' ;

@Injectable()
export class BookService {

  private path = '/books';
  constructor(private api: ApiService) { }

  getLatestNotes(): Observable<List<Book>> {
    return this.api.get(this.path + '/latest-notes');
  }

}
