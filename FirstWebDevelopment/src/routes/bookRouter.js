
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

bookRouter.route('/:id')
    .get(function (req, res) {
        var id = req.params.id;
        res.render('book', {
            title: 'Books',
            nav: [
                { Link: '/Books', Text: 'Books' },
                { Link: '/Authors', Text: 'Authors' }
            ],
            book: books[id]
        });

    });


module.exports = bookRouter;

