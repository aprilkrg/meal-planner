/**
 * what I understand
 */
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
require('dotenv').config();

const PORT = process.env.PORT || 4000;


app.use(methodOverride('_method'));

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

require('./config/database');
require('./config/passport');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const mealsRouter = require('./routes/meals');
app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/meals', mealsRouter);

app.set('view engine', 'ejs');


const createError = require('http-errors');
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

/**
 * what I want to keep
 */

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/**
 * what I want to delete
 const passport = require('passport');
 const path = require('path');
 const cookieParser = require('cookie-parser');
 app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
const logger = require('morgan');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views')
app.use(express.static(path.join(__dirname, 'public'))););

// Add this middleware BELOW passport middleware
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});
 */









app.listen(PORT, function(){
  console.log(`Server is running at ${PORT}`)
});

module.exports = app;
