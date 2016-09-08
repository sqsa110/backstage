var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
//  var logger = require('morgan');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var RedisStore = require('connect-redis')(expressSession);
var bodyParser = require('body-parser');
var log4js = require('log4js');
var routes = require('./routes/index');
var users = require('./routes/users');
var log = require("./public/bin/log");
var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
//  app.set('view engine', 'jade');
//app.engine('html',require('jade').renderFile);
app.engine('html',require('ejs').__express);
app.set('view engine','html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//  app.use(logger('dev'));
//  
app.use(log4js.connectLogger(log.logger('normal'), {level:'auto', format:':method :url'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('backstage'));
app.use(expressSession({
  resave : false,
  saveUninitialized:true,
  store: new RedisStore({
    host : '127.0.0.1',
    port : 6379,
    ttl : 60 * 60
  }),
  secret : 'backstage'
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  console.log('123');
});

app.use('/favicon.ico',express.static(path.join(__dirname, './favicon.ico')));
app.use('/', routes);

//app.use(routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
