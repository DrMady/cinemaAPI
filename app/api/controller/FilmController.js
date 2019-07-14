'use strict';

let Films = require('../model/FilmModel.js');

exports.listAll = function(req, res) {
    Films.listAll(function(err, film) {
        if (err)
            res.send(err);
        console.log('res', film);
        res.send(film);
    });
};

exports.addAvis = function(req, res) {
    Films.addAvis(req.body['name here'], req.params.UserId, req.params.Id, function (err, film) {
        if (err)
            res.send(err);
        console.log('res', film);
        res.send(film);
    })
};