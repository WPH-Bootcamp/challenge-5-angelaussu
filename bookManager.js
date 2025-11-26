// 2. Create books array to store books
var books = [];
/**
 * 3. Adds a new book to the collection.
 * @param title The title of the book.
 * @param author The author of the book.
 * @param publicationYear The year the book was published.
 * @returns void
 */
function addBook(title, author, publicationYear) {
    var newBook = {
        title: title,
        author: author,
        publicationYear: publicationYear,
    };
    books.push(newBook);
    // Log format adjusted to match the requested output
    console.log("> Book added: \"".concat(title, "\" by ").concat(author, " (").concat(publicationYear, ")"));
}
/**
 * 4. Displays all stored books in the collection.
 * @returns void
 */
function listBooks() {
    console.log('\n> All Books:');
    if (books.length === 0) {
        console.log('> The collection is empty.');
        return;
    }
    books.forEach(function (book) {
        // Log format adjusted to match the requested output
        console.log("> - ".concat(book.title, " by ").concat(book.author, " (").concat(book.publicationYear, ")"));
    });
}
/**
 * 5. Finds and displays books by title.
 * @param title The title (or partial title) to search for. Optional.
 * @returns void
 */
function searchBook(title) {
    // Handles the case where the optional title parameter is not provided
    if (!title) {
        console.log('\n> Search Results: Please provide a title to search.');
        return;
    }
    console.log("\n> Search Results for \"".concat(title, "\":"));
    var searchTerm = title.toLowerCase();
    var results = books.filter(function (book) {
        // Case-insensitive search using .toLowerCase() and .includes()
        return book.title.toLowerCase().includes(searchTerm);
    });
    if (results.length === 0) {
        console.log("> No books found with title matching: \"".concat(title, "\""));
        return;
    }
    results.forEach(function (book) {
        // Log format adjusted to match the requested output
        console.log("> - ".concat(book.title, " by ").concat(book.author, " (").concat(book.publicationYear, ")"));
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
