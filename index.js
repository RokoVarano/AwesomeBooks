import Book from './modules/backend/book.js';
import Library from './modules/backend/library.js';
import { bookList } from './modules/frontend/bookList.js';

console.log('This is running!!');

const run = () => {
  
  const library = new Library([
    new Book('Hansel-Gretel', 'Grim brothers')
  ]); //load books from LocalStorage!

  bookList(library.books);
}

run();