import { ApiService } from './api.service';
import { Book, List, User } from '../models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  private path = '/users';
  constructor(private api: ApiService) { }

  getLatest(): Observable<List<User>> {
    return this.api.get(this.path + '/latest');
  }

  getUserBooks(userId: string): Observable<Book[]> {
    return this.api.get(`${this.path}/${userId}/books`);
  }

  getUserInfo(userId: string): Observable<User> {
    return this.api.get(this.path + '/' + userId)
  }

  getCredentials(authToken: string) {
    return this.api.post(this.path + '/get-credentials', { token: authToken });
  }
}
