
var express = require('express');
var bookRouter = express.Router();

var books = [
    {
        title: 'guidtogalexy',
        gener: 'comic fiction',
        author: 'someone'
    },
    {
        title: 'Alchemist',
        gener: 'fiction',
        author: 'pual'
    },
    {
        title: 'Alchemist',
        gener: 'fiction',
        author: 'pual'
    },
    {
        title: 'Alchemist',
        gener: 'fiction',
        author: 'pual'
    }
];

bookRouter.route('/')
    .get(function (req, res) {
        res.render('books', {
            title: 'Books',
            nav: [
                { Link: '/Books', Text: 'Books' },
                { Link: '/Authors', Text: 'Authors' }
            ],
            books: books
        });

    });

bookRouter.route('/single')
    .get(function (req, res) {
        res.send('Hello single Books');

    });


module.exports = bookRouter;

