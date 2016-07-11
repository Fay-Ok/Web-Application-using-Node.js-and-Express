var passport = require('passport'),
    LocalStrategy = require('passport-local').strategy;



module.exports = function () {
    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'

    },
        function (username, password, done) {
            var user = {
                username: username,
                password: password
            };

            done(null, user);

        }));

};