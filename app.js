const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const bookRouter = require('./routes/book');

const app = express();

// kế nối mongoose
mongoose.connect('mongodb+srv://anhkhoadev:Kenbi123@cluster0.cnauzt0.mongodb.net/myapp-demo?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=> {
  console.log('Database connected');
})
.catch((error)=> {
  console.log('Error connecting to database');
});




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/book', bookRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
