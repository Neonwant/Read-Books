import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {

  private authHook: Subject<string>  = new Subject();

  constructor(private userService: UserService) {
    window['authHook'] = this.authHook;
  }


  setAuthHook() {
    this.authHook
      .switchMap(authToken => this.userService.getCredentials(authToken))
      .subscribe(accessToken => {
        console.log('accessToken', accessToken);
      });

  }
}
