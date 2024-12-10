import { Router } from 'express';
const router = Router();
import { createBook, getBooks, getBookById, updateBook, deleteBook } from '../controllers/bookController';

/**
 * @route POST /books
 * @description Create a new book
 * @access Public
 */
router.post('/', createBook);

/**
 * @route GET /books
 * @description Get all books
 * @access Public
 */
router.get('/', getBooks);

/**
 * @route GET /books/:id
 * @description Get book by ID
 * @access Public
 */
router.get('/:id', getBookById);

/**
 * @route PUT /books/:id
 * @description Update book by ID
 * @access Public
 */
router.put('/:id', updateBook);

/**
 * @route DELETE /books/:id
 * @description Delete book by ID
 * @access Public
 */
router.delete('/:id', deleteBook);

export default router;
