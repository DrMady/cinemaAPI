'use strict';

let Users = require('../model/appModel.js');
let time = require('../model/date.js');

exports.listAll = function(req, res) {
    Users.listAll(function(err, user) {
        if (err)
            res.send(err);
        console.log('res', user);
        res.send(user);
    });
};

exports.getUserById = function(req, res) {
  Users.getUserById(req.params.Id, function (err, user) {
      if (err)
          res.send(err);
      console.log('res', user);
      res.send(user);
  })
};

exports.getHistory = function(req, res) {
    Users.getHistory(req.params.Id, function (err, user) {
        if (err)
            res.send(err);
        console.log('res', user);
        res.send(user);
    })
};

exports.changeSub = function(req, res) {
    Users.changeSub(req.params.Sub, req.params.Id, function (err, user) {
        if (err)
            res.send(err);
        console.log('res', user);
        res.send(user);
    })
};

exports.addHistory = function(req, res) {
    Users.addHistory(req.params.Id, req.body['name here'], time,function (err, user) {
        if (err)
            res.send(err);
        console.log('res', user);
        res.send(user);
    })
};