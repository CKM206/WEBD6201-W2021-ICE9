/**
 * Third Party Modules
 */
import createError = require('http-errors');
import express = require('express');
import path = require('path');
import cookieParser = require('cookie-parser');
import logger = require('morgan');

/**
 * Routing
 */
let indexRouter = require('./Routes/index');

/**
 * Web App Instance
 */
let app = express();

/**
 * View Engine Setup
 */
app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'Client')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/', indexRouter);

/**
 * Catch 404 and forward to error handler
 */
app.use(function(req: express.Request, res: express.Response, 
                 next: express.NextFunction) : void
{
  next(createError(404));
});

/**
 * Error Handling
 */
app.use(function(err: createError.HttpError, req: express.Request, 
                 res: express.Response, next: express.NextFunction) : void
{
  // set locals, only providing error in development
  let message = err.message;
  let error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { message: message, error: error, title: 'ERROR', page: 'error'});
});

module.exports = app;
