import express, { Express, Request, Response } from 'express';

const app = express();
app.get('/', (req, res) => {
    res.send('Hello from the server');
});

app.listen(8000, () => {
    console.log('Server is running at port 8000')
})
