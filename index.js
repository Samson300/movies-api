const express = require('express');

const PORT = 5000;


const moviesRouter = require('./routes/movies');


const app = express();


app.use('/movies', moviesRouter);


app.listen(PORT, () => {
    console.log(`Running on port ${PORT}!`);
})