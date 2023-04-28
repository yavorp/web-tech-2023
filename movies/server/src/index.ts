import express, {Response, Request} from 'express';
import bodyParser from 'body-parser';
import userRouter from './router/user-router';
import dotenv from 'dotenv';
dotenv.config();

const PORT = Number(process.env.SERVER_PORT || 8000);
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.send('Hello from server');
});

app.use('/user', userRouter);

app.get('/movie', (request, response) => {
    response.send('Movies endpoint');
});

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
});
