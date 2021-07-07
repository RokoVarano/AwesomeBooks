/* eslint-disable import/extensions */
import Library from './modules/backend/library.js';
import { bookList, addBookForm, dateTime } from './modules/frontend/frontend.js';

const run = () => {
  const library = new Library();

  dateTime();

  bookList(library);

  addBookForm(library);
};

run();

/* eslint-enable import/extensions */
