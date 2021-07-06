const bookList = (library) => {
  const addBook = (book, library) => {
    const li = document.createElement('li');
    li.classList.add('secondary')
    const pTitle = document.createElement('p');
    pTitle.textContent = book.title;
    const pAuthor = document.createElement('p');
    pAuthor.textContent = book.author;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      library.deleteBook(book);
      li.style.display = 'none';
    });

    li.appendChild(pTitle);
    li.appendChild(pAuthor);
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