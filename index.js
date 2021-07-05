import Book from './modules/backend/book.js';
import Library from './modules/backend/library.js';
import { bookList, addBookForm } from './modules/frontend/frontend.js';

const run = () => {
  const library = new Library();

  bookList(library);

  addBookForm(library);
}

run();