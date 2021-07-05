/* eslint-disable import/extensions */

import Library from './modules/backend/library.js';
import { bookList, addBookForm } from './modules/frontend/frontend.js';

const run = () => {
  const library = new Library();

  bookList(library);

  addBookForm(library);
};

run();

/* eslint-enable import/extensions */
