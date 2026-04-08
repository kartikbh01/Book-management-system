import { createReducer, on } from '@ngrx/store';
import { AddBook, RemoveBook } from './book.actions';
import { Book } from '../models/book';

export const initialState: ReadonlyArray<Book> = [];

export const BookReducer = createReducer(
  initialState,

  // add book
  on(AddBook, (state, { id, title, author }) => [
    ...state,
    { id, title, author },
  ]),

  // remove book
  on(RemoveBook, (state, { bookId }) => state.filter((b) => b.id != bookId))
);
