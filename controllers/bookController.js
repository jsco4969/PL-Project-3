import Book, { find, findById, findByIdAndUpdate, findByIdAndDelete } from '../models/book';

/**
 * Create a new book in the database.
 * @async
 * @function createBook
 * @param {Object} req - The request object, containing the book data.
 * @param {Object} res - The response object, used to send back the created book data.
 * @throws {Error} If the book creation fails.
 */
async function createBook(req, res) {
  try {
    const { title, author, genre, yearPublished, type } = req.body;
    const newBook = new Book({ title, author, genre, yearPublished, type });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Error creating book', error });
  }
}

/**
 * Get all books in the database.
 * @async
 * @function getBooks
 * @param {Object} req - The request object.
 * @param {Object} res - The response object, used to send back the list of books.
 * @throws {Error} If the database query fails.
 */
async function getBooks(req, res) {
  try {
    const books = await find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error });
  }
}

/**
 * Get a specific book by ID.
 * @async
 * @function getBookById
 * @param {Object} req - The request object, containing the book ID.
 * @param {Object} res - The response object, used to send back the book data.
 * @throws {Error} If the book is not found or a database error occurs.
 */
async function getBookById(req, res) {
  try {
    const book = await findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching book', error });
  }
}

/**
 * Update a book by ID.
 * @async
 * @function updateBook
 * @param {Object} req - The request object, containing the book ID and updated data.
 * @param {Object} res - The response object, used to send back the updated book.
 * @throws {Error} If the update fails.
 */
async function updateBook(req, res) {
  try {
    const updatedBook = await findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: 'Error updating book', error });
  }
}

/**
 * Delete a book by ID.
 * @async
 * @function deleteBook
 * @param {Object} req - The request object, containing the book ID.
 * @param {Object} res - The response object, used to send back a success message.
 * @throws {Error} If the deletion fails.
 */
async function deleteBook(req, res) {
  try {
    const deletedBook = await findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book', error });
  }
}

export default {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
};
