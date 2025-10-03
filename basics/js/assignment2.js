const books = ["Harry Potter", "The Hobbit", "Atomic Habbits"];

const remainingBook = books.filter((book) => book != "The Hobbit");
console.log(remainingBook);

const user = { name: "Abc", borrowedBook: [] };

function addBook(book) {
  user.borrowedBook[0] = book;
  onsole.log("user borrowed the book: ", book);
}

addBook("Harry Potter");
