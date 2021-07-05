import Book from './book.js';

export default class Library {
  constructor(){
    let books = []

    if (localStorage.getItem('books')) {
      books = JSON.parse(localStorage.getItem('books'));
    }

    this.books = books
  }

  addBooksToStorage = (title, author)  => {
    this.books.push(new Book(title, author));

    const jbooks = JSON.stringify(this.books);
    localStorage.setItem('books', jbooks);
  }
}