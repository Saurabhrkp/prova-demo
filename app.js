const createError = require('http-errors');
const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const logger = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Serving static public folder
app.use(express.static(path.join(__dirname, 'public')));

// Logging
app.use(logger('dev'));

// Body parser for Forms
app.use(express.json());

// Express body parser
app.use(express.urlencoded({ extended: false }));

//  Protects app from some well-known web vulnerabilities
app.use(helmet());

// Compress all routes
app.use(compression());

// For Cookie parsing
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
