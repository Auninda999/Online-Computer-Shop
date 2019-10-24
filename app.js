//DECLARATION
var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var expSession = require('express-session');
var cookieParser = require('cookie-parser');
var home = require('./controllers/home-controller');
var adminlogin = require('./controllers/admincontroller/login');
var customerlogin = require('./controllers/customercontroller/login');
var app = express();


//CONFIGURATION
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended:true}));
app.use(expSession({secret:'my top secret value', saveUninitialized:true, resave: false}));
app.use(cookieParser());
//app.use('/views/css', express.static('css'))
app.use('/home', home);
app.use('/admin', adminlogin);


//SERVER STARTUP
app.listen(3000, function(){
	console.log('server started at 3000...');
});