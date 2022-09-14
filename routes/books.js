import express from 'express';

import { createBook, getBooks, getBook, deleteBook, updateBook } from '../controllers/books.js';


const router = express.Router();

router.get('/', getBooks);

router.post('/', createBook);

router.get('/:id', getBook);

router.patch('/:id', updateBook);

router.delete('/:id', deleteBook);

export default router;