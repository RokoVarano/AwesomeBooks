/* eslint-disable import/extensions */

import { DateTime } from '../libraries/luxon.js';

const showHide = () => {
  const navlink1 = document.getElementById('navlink1');
  const navlink2 = document.getElementById('navlink2');
  const navlink3 = document.getElementById('navlink3');

  const showBooks = document.querySelector('.show-books');
  const bookForm = document.querySelector('.book-form');
  const contactInfo = document.querySelector('.contact-information');

  showBooks.style.display = 'flex';
  bookForm.style.display = 'none';
  contactInfo.style.display = 'none';

  navlink1.addEventListener('click', () => {
    showBooks.style.display = 'flex';
    bookForm.style.display = 'none';
    contactInfo.style.display = 'none';
  });

  navlink2.addEventListener('click', () => {
    showBooks.style.display = 'none';
    bookForm.style.display = 'flex';
    contactInfo.style.display = 'none';
  });

  navlink3.addEventListener('click', () => {
    showBooks.style.display = 'none';
    bookForm.style.display = 'none';
    contactInfo.style.display = 'flex';
  });
};

const dateTime = () => {
  const dt = DateTime.now();
  const dateTime = document.querySelector('.date-time');
  dateTime.textContent = dt.toLocaleString(DateTime.DATETIME_MED);
};

const bookList = (library) => {
  const addBook = (book, library) => {
    const li = document.createElement('li');
    li.classList.add('secondary');
    const p = document.createElement('p');
    p.classList.add('item-name');
    p.textContent = `${book.title} by ${book.author}`;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteBookBtn');
    deleteBtn.addEventListener('click', () => {
      library.deleteBook(book);
      li.style.display = 'none';
    });

    li.appendChild(p);
    li.appendChild(deleteBtn);

    return li;
  };

  const bookContainer = document.querySelector('.books-container');

  library.books.forEach((book) => bookContainer.appendChild(addBook(book, library)));
};

const addBookForm = (library) => {
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const addBookBtn = document.querySelector('.addBookBtn');

  addBookBtn.addEventListener('click', () => library.addBooksToStorage(title.value, author.value));
};

export {
  bookList, addBookForm, dateTime, showHide,
};

/* eslint-enable import/extensions */