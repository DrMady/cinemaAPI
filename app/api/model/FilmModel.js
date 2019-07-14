'use strict';

let sql = require('./db.js');

let Films = function(films){
    this.films = films.films;

};

Films.listAll = function (result) {
    sql.query("Select * from film", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('films : ', res);

            result(null, res);
        }
    });
};

Films.addAvis = function (avis, userId, filmId, result) {
    sql.query("UPDATE historique_membre SET avis = ? WHERE id_membre = ? AND id_film = ?;"
        , [avis, userId, filmId], function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);

            }
        });
};

module.exports = Films;