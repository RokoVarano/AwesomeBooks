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

export { bookList, addBookForm };