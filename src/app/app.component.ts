import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'k-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthService) {
    this.authService.setAuthHook();
  }

}
