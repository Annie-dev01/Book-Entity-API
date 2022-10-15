import express  from 'express';
import  bodyParser from 'body-parser';
import routes from './routes/books.js'


const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/books', routes)

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));