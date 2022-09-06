import express from 'express';

const router = express.Router();

const books = [
  {
    bookTitle: "JS Fundamentals",
  authorName: "John Doe",
  numberOfPages: "300",
  price: "$20",
  ratings: "5 star"
},
{
  bookTitle: "Modern JavaScript",
  authorName: "Jane Doe",
  numberOfPages: "400",
  price: "$30",
  "ratings": "5 star"
},
{
  bookTitle: "Advanced JavaScript",
  authorName: "Jonny Doe",
  numberOfPages: "400",
  price: "$35",
  ratings: "5 star"
}
]

router.get('/', (req, res) => {
console.log(books);

res.send(books);
});

router.get('/book/:id', (req, res) =>{

});

router.post('/books', (req, res) =>{

});

router.patch('/books/:id', (req, res) =>{

});

router.delete('/books/:id', (req, res) =>{

});

export default router;