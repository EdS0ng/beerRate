'use strict';

var PORT = process.env.PORT || 3000;

var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
require('dotenv').load();
var mongoUrl = process.env.MONGOLAB_URI || 'mongodb://localhost/beerRate';

mongoose.connect(mongoUrl, function(err){
  if(err) return console.error(`Error connecting to Mongodb: ${err}`);
  console.log(`Connected to MongoDB: ${mongoUrl}`);
});

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//General Middleware
app.use(logger('dev'));
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/beers', require('./routes/beers'));

app.use(function(req, res){
  res.status(404).render('404');
});



var server = http.createServer(app);

server.listen(PORT);
server.on('error', function(err) {
  console.error(err);
});
server.on('listening', function(){
  console.log(`Listening on port ${PORT}`);
});
