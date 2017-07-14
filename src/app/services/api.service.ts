import { List } from '../models';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  get(path: string): Observable<List<any>> {
    return this.http.get(path)
      .map(data => data.text() ? data.json() : data)
      .catch(this.handlerError);
  }

   post(path: string, body: any): Observable<List<any>> {
    return this.http.post(path, body)
      .map(data => data.text() ? data.json() : data)
      .catch(this.handlerError);
  }

  handlerError(error: Response | any) {
    let errMsg = '';
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${ error.status } - ${ error.statusText || ''} ${ err }`
    } else {
      errMsg = error.message || error.toString();
    }
    console.log(error);
    return Observable.throw(errMsg);
  }
}
