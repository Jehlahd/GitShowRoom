/**
 * Created by Vincent on 04/08/2015.
 */
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require("jwt-simple");
var passport = require("passport");
var LocalStrategy = require("./services/localStrategy.js");
var createSendToken = require('./services/jwt.js');
var articles = require('./services/articles.js');
var article = require('./services/article.js');
var products = require('./services/products');
var product = require("./services/product")
var checkAuth = require('./services/checkAuthentification.js')

var app = express();

app.use(bodyParser.json());
app.use(passport.initialize());

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Credentials', 'true');

    res.header('Access-Control-Allow-Origin', '*');

    //res.header('Access-Control-Allow-Origin', 'http://localhost:9000');

    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    next();

});

passport.use('local-register',LocalStrategy.register);
passport.use('local-login',LocalStrategy.login);

app.get('/articles', articles);
app.get('/article', article.article);

app.get('/products', products);
app.get('/product', product);

app.get('/backArticles', checkAuth, articles);
app.get('/backArticle', checkAuth, article.article);
app.delete('/backArticle', checkAuth, article.delete);
app.put('/backArticle', checkAuth, article.update);

app.get('/backProducts', checkAuth, products);
app.get('/backProduct', checkAuth, product);


app.post("/backArticle", article.createArticle);
app.post('/upload', function(req, res){
    console.log(req.query.file);
});

app.post('/register', passport.authenticate('local-register'), function(req, res){
    createSendToken(req.user, res);
});

app.post('/login', passport.authenticate('local-login'), function(req, res){
    createSendToken(req.user, res);
});

mongoose.connect('mongodb://localhost/showRoom');

var server = app.listen(3000, function(){
    console.log('api listening on ', server.address().port);
});