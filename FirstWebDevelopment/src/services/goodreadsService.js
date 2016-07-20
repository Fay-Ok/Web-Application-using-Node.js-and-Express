
var http = require('http');
var xml2js = require('xml2js');
var parser = xml2js.Parser({ explicitArray: false });

var goodreadsService = function () {
    var getBookById = function (id, cb) {
        var options = {
            host: 'www.goodreads.com',
            path: 'https://www.goodreads.com/book/show/656.xml?key=Z8JHq069t9PjStyw2rKTw'
        };

        var callback = function (response) {
            var str = '';

            response.on('data', function (chunck) {
                str += chunck;
            });
            response.on('end', function () {
                console.log(str);
                parser.parseString(str, function (err, result) {
                    cb(null, result.GoodreadsResponse.book);
                });
            });
        }
        http.request(options, callback).end();
    };
    return {
        getBookById: getBookById
    }
};



module.exports = goodreadsService;