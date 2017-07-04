export class User {
  id?: string;
  nickname?: string;
  booksCount?: number;
  updatedAt?: string;
}
export class Book {
  id?: string;
  title?: string;
  author?: string;
  notes?: string;
  createdAt?: string;
  user?: User;
  userId?: string;
  lang?: any;
  readDay?: string;
  readMonth?: number;
  readYear?: number;
  updatedAt?: string;
}

export interface List<T> {
  [index: string]: T;
}
