'use strict';

const express = require('express')
    , User    = require('../models/user');

let router = express.Router();

router.post('/register', (req, res) => {
  User.register(req.body, (err, user) => {
    res.status(err ? 400 : 200).send(err || "Registered!");
  });
});

router.post('/login', (req, res) => {
  User.authenticate(req.body, (err, user) => {
    if(err){
      res.status(400).send(err);
      return;
    }else if (user.token) {
      var token = user.token();
      res.status(200).send({token:token, user:user});
    }else{
      res.status(401).send(user);
    }
  });
});

module.exports = router;