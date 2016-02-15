'use strict';

const express = require('express');
var request = require('request');
const beerDbAPI = process.env.BEER_API;
const url = 'http://api.brewerydb.com/v2/beer/random?key='+beerDbAPI+'&format=json';

let router = express.Router();

router.get('/', function (req, res){
  request.get(url+"&hasLabels=Y", function (err, resp, body){
    if (err) return console.log(err);
    res.send(body);
  });
})


module.exports = router;