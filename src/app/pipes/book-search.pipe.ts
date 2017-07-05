import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models';

@Pipe({
  name: 'bookSearch'
})
export class BookSearchPipe implements PipeTransform {

  transform(value: Book[], search: string): Book[] {

    return value
      .filter(b => {
        const s = [
          b.author,
          b.title,
          b.notes,
        ].join(' ').toUpperCase();

        return !search || ~s.indexOf(search.toUpperCase());
      });



  }

}
