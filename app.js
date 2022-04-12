var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const session = require("express-session");
let route = require("./src/routes");
let reviews = require("./src/models/reviews");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "/src/views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public")));
app.use(
  session({
    secret: "sadfasdfasdfasdfqrtpyiounbmbmzvzxcvfsdbasdsfgsdfg874358dsf76dfg76&?$%%?$&fasdfasdfasdfsadf",
    cookie: { maxAge: 600 * 1000 }, // 600 sec
    resave: true,
    saveUninitialized: true,
  })
);

// load static data in app.locals to simulate a database
app.locals.reviews = reviews.loadReviews();
app.locals.showReviewAck = false;

//routes

app.use(route);

// catch 404 and forward to error handlers
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("404");
});

module.exports = app;
