import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Book, List, User } from '../models';
import { UserService } from '../services/user.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'k-user-books',
  templateUrl: './user-book-list.component.html'
})
export class UserBookListComponent implements OnInit {
  private userBooks: Book[];
  private userId: string;

  constructor(private userService: UserService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    //   this.userId = params['u'];

    this.route.queryParams
      .switchMap(params => this.userService.getUserBooks(params['u']))
      .subscribe((list: Book[]) => {
        this.userBooks = list;
      });
  }

}

