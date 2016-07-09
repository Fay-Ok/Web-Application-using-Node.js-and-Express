var passport = require('passport');

var passportFunction = function (app) {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serilizeUser(function (user, done) {
        done(err, user);
    });

    passport.deserilizeUser(function (user, done) {
        done(err, user);
    });

    require('./strategies/local.strategy')();

};

module.exports = passportFunction;
