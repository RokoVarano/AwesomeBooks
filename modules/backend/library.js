import Book from './book.js';

export default class Library {
  constructor(books){
    this.books = books;
  }

  addBook = (title, author) => {
    this.books.push(new Book(title, author));
  }
}