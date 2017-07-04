import { ApiService } from './api.service';
import { List, User} from '../models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  private path = '/users';
  constructor(private api: ApiService) { }

  getLatest(): Observable<List<User>> {
    return this.api.get(this.path + '/latest');
  }

}
