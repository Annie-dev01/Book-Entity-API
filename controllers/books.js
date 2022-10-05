import { v4 as uuidv4 } from 'uuid';
let books = []

export const getBooks = (req, res) =>{
      res.send(books);
}

export const createBook = (req, res)=>{
      const book = req.body;
      books.push({ ...book, id: uuidv4()});
      res.send(`Book with the name ${book.bookTitle} added to the database!`);
}

export const getBook = (req, res) =>{
      const { id } = req.params;
      const foundBook = books.find(book => book.id ==id);
      res.send(foundBook);
}

export const updateBook =  (req, res)=>{
      const { id } = req.params;
      const {bookTitle, authorName, numberOfPages, price } = req.body;
      const book = books.find((book) => book.id == id);
      
      if(bookTitle) {
         book.bookTitle = bookTitle;
      }
      if(authorName){
         book.authorName = authorName;
      }
      if(numberOfPages){
         book.numberOfPages = numberOfPages;
      }
      if(price){
      } book.price = price;
      res.send(`Book with the id ${id} has been updated.`);
}
export const deleteBook = (req, res)=> {  
      const { id } = req.params;
      books = books.filter((book) => book.id !== id);
      res.send(`Book with the id ${id} deleted from the database.`); 
}
    