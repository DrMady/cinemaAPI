'use strict';

let sql = require('./db.js');
let time = require('./date');

let Users = function(users){
    this.users = users.users;

};

Users.listAll = function (result) {
    sql.query("Select * from fiche_personne", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('users : ', res);

            result(null, res);
        }
    });
};

Users.getUserById = function (userId, result) {
    sql.query("Select * from fiche_personne where id_perso = ? ", userId, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);

        }
    });
};

Users.getHistory = function (userId, result) {
    sql.query("Select * from historique_membre where id_membre = ?", userId, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);

        }
    });
};

Users.addHistory = function (userId, filmId, time, result) {
    sql.query("INSERT INTO historique_membre (id_membre, id_film, date, avis) VALUES (?, ?, ?, '');"
        , [userId, filmId, time], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);

        }
    });
};

Users.changeSub = function (subId, userId, result) {
    sql.query("UPDATE membre SET id_abo = ? WHERE membre.id_membre = ?", [subId, userId], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);

        }
    });
};

module.exports = Users;