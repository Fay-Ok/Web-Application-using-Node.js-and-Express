
var express = require('express');
var bookRouter = express.Router();

var router = function (nav) {
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
            res.render('bookListView', {
                title: 'Books',
                nav: nav,
                books: books
            });

        });

    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('bookView', {
                title: 'Books',
                nav: nav,
                book: books[id]
            });

        });



    return bookRouter;

};



module.exports = router;

