import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Book, List, User } from '../models';
import { UserService } from '../services/user.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'k-user-books',
  templateUrl: './user-book-list.component.html'
})
export class UserBookListComponent implements OnInit, OnDestroy {
  private userBooks: Book[];
  private user: User = new User();
  private userId: string;
  private routeSub: Subscription;
  private bookGroups = [];
  private error: string;
  constructor(private userService: UserService, private route: ActivatedRoute) {

  }


  ngOnInit() {
    this.routeSub = this.route.queryParams
      .switchMap(params => {
        this.userId = params['u'];
        this.userService.getUserInfo(this.userId).subscribe((user: User) => this.user = user);

        return this.userService.getUserBooks(params['u'])
      })
      .subscribe(this.bookLoadSuccess, this.bookLoadFail)

  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  bookLoadSuccess = (list: Book[]) => {
    this.userBooks = list;
    const years = new Set(list.map(i => i.readYear)); // for unique
    this.bookGroups = Array.from(years).sort().reverse()
      .map(y => {
        return {
          year: y,
          count: this.userBooks.filter(b => b.readYear === y).length
        }
      });
  }

  bookLoadFail = (err: string) => {
    this.error = err;
    this.userBooks = [];
    this.bookGroups = [];
    this.user = new User();
  }
}

