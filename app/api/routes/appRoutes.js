'use strict';
module.exports = function(app) {
    let user = require('../controller/appController');
    let film = require('../controller/FilmController');

    // Routes
    app.route('/users')
        .get(user.listAll);

    app.route('/users/:Id')
        .get(user.getUserById);

    app.route('/users/:Id/changeSub/:Sub')
        .patch(user.changeSub);

    app.route('/users/:Id/history')
        .get(user.getHistory)
        .post(user.addHistory);

    app.route('/films')
        .get(film.listAll);

    app.route('/films/:Id/avis/:UserId')
        .patch(film.addAvis);
};