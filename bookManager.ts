// 1. Create a type for book
type Book = {
  title: string;
  author: string;
  publicationYear: number;
};

// 2. Create books array to store books
const books: Book[] = [];

/**
 * 3. Adds a new book to the collection.
 * @param title The title of the book.
 * @param author The author of the book.
 * @param publicationYear The year the book was published.
 * @returns void
 */
function addBook(title: string, author: string, publicationYear: number): void {
  const newBook: Book = {
    title,
    author,
    publicationYear,
  };
  books.push(newBook);
  // Log format adjusted to match the requested output
  console.log(`> Book added: "${title}" by ${author} (${publicationYear})`);
}

/**
 * 4. Displays all stored books in the collection.
 * @returns void
 */
function listBooks(): void {
  console.log('\n> All Books:');
  
  if (books.length === 0) {
    console.log('> The collection is empty.');
    return;
  }
  
  books.forEach(book => {
    // Log format adjusted to match the requested output
    console.log(`> - ${book.title} by ${book.author} (${book.publicationYear})`);
  });
}

/**
 * 5. Finds and displays books by title.
 * @param title The title (or partial title) to search for. Optional.
 * @returns void
 */
function searchBook(title?: string): void {
  // Handles the case where the optional title parameter is not provided
  if (!title) {
    console.log('\n> Search Results: Please provide a title to search.');
    return;
  }
  
  console.log(`\n> Search Results for "${title}":`);
  
  const searchTerm = title.toLowerCase();
  
  const results = books.filter(book =>
    // Case-insensitive search using .toLowerCase() and .includes()
    book.title.toLowerCase().includes(searchTerm)
  );

  if (results.length === 0) {
    console.log(`> No books found with title matching: "${title}"`);
    return;
  }

  results.forEach(book => {
    // Log format adjusted to match the requested output
    console.log(`> - ${book.title} by ${book.author} (${book.publicationYear})`);
  });
}

// --- Example Usage ---

// Adding some books
addBook('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
addBook('1984', 'George Orwell', 1949);
addBook('To Kill a Mockingbird', 'Harper Lee', 1960);

// Displaying all books
listBooks();

// Searching for a book by title
searchBook('1984');

// Example search for a partial match
searchBook('Gatsby');

// Example search for a non-existent book
searchBook('Dune');

// Example of calling with an optional parameter missing
searchBook();