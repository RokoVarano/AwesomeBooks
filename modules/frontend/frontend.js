const bookList = (books) => {

  const addBook = (book) => {
    const li = document.createElement('li');
    const pTitle = document.createElement('p');
    pTitle.textContent = book.title;
    const pAuthor = document.createElement('p');
    pAuthor.textContent = book.author;

    li.appendChild(pTitle);
    li.appendChild(pAuthor);

    return li;
  }

  const bookContainer = document.querySelector('.books-container');

  books.forEach(book => bookContainer.appendChild(addBook(book)));
}

const addBookForm = (library) => {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const addBookBtn = document.querySelector(".addBookBtn");

  addBookBtn.addEventListener('click', () => library.addBooksToStorage(title.value, author.value));
}

export { bookList, addBookForm };