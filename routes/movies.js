// const controller = require('../controllers/movies');
const express = require('express');

const Router = express.Router;

const moviesRouter = Router();

module.exports = moviesRouter;

const {
    create,
    retrieveAll,
    update,
    deleteOne
} = require('../controllers/movies');


moviesRouter.get('/', retrieveAll);

moviesRouter.post('/', create);

moviesRouter.put('/', update);

moviesRouter.delete('/', deleteOne);