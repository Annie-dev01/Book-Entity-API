import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

    

export const getBooks = (req, res) => {
	const books  = JSON.parse(fs.readFileSync('./data/books.json'));
	res.send(books);
}

export const createBook = (req, res) => {
	let books =  [...JSON.parse(fs.readFileSync('./data/books.json'))]
	const book = req.body;
	books.push({ ...book, id: uuidv4()});
	fs.writeFileSync('./data/books.json', JSON.stringify(books), 'utf-8')
	res.send(`Book with the name ${book.bookTitle} added to the database!`);
}

export const getBook = (req, res) => {
	const books  = JSON.parse(fs.readFileSync('./data/books.json'));
	const { id } = req.params;
	const foundBook = books.find(book => book.id ==id);
	res.send(foundBook);
}

export const updateBook =  (req, res) => {
	// get all books
	let books =  [...JSON.parse(fs.readFileSync('./data/books.json'))]
	// get update id
	const { id } = req.params;
	// get update payload
	const {bookTitle, authorName, numberOfPages, price } = req.body;
	
	// find books
	const book = books.find((book) => book.id == id);
	console.log(book);
	// update payload
	bookTitle ? book.bookTitle = bookTitle: null;
	authorName ? book.authorName = authorName: null;
	numberOfPages ? book.numberOfPages = numberOfPages : null;
	price ? book.price = price: null;

	console.log(book);
	// get new array
	const newBooks = books.filter((book)=>book.id != id)
	console.log(newBooks);
	// write  new file
	const savedArray = [...newBooks,book]
	console.log(savedArray);
	fs.writeFileSync('./data/books.json', JSON.stringify(savedArray), 'utf-8')
	
	res.send(`Book with the id ${id} has been updated.`);
}
export const deleteBook = (req, res) => {  
	// get all books
	let books =  [...JSON.parse(fs.readFileSync('./data/books.json'))]
	// get update id
	const { id } = req.params;
	// get new array
	const newBooks = books.filter((book) => book.id !== id);
	console.log(newBooks);
	fs.writeFileSync('./data/books.json', JSON.stringify(newBooks), 'utf-8')
	
	res.send(`Book with the id ${id} deleted from the database.`); 
}

