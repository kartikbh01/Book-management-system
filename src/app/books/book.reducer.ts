import { createReducer, on } from "@ngrx/store";
import { AddBook, RemoveBook } from "./book.actions";
import { Book } from "../models/book";

export const initialState: Book[] = [];

export const BookReducer = createReducer(
    initialState,

    // Add book
    on(AddBook, (state, { id, title, author }) => [...state, { id, title, author }]),
    
    // Remove book
    on(RemoveBook, (state, { bookId }) => state.filter(book => book.id !== bookId))
);