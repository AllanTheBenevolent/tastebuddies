
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var cook = require('./routes/cook');
var profile = require('./routes/profile');
var editProfile = require('./routes/editProfile');
var tastebuddies = require('./routes/tastebuddies');
var help = require('./routes/help');
var recipes = require('./routes/recipes');
var chickensandwich = require('./routes/chickensandwich');
var chickenskewers = require('./routes/chickenskewers');
var sundriedtomatochicken = require('./routes/sundriedtomatochicken');
var friedchicken = require('./routes/friedchicken');
var bookmarked = require('./routes/bookmarked');
var add = require('./routes/add');
var completion = require('./routes/completion');
var completed = require('./routes/completed');
var newBuddy = require('./routes/newBuddy'); 

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/index', index.view);
app.get('/cook', cook.cookPage);
app.get('/profile', profile.profilePage);
app.get('/editProfile', editProfile.editProfilePage);
app.get('/tastebuddies', tastebuddies.tastebuddiesPage);
app.post('/tastebuddies', tastebuddies.selectBuddy);
app.get('/help', help.helpPage);
app.get('/recipes', recipes.recipesPage);
app.get('/chickensandwich', chickensandwich.chickensandwichPage);
app.get('/chickenskewers', chickenskewers.chickenskewersPage);
app.get('/sundriedtomatochicken', sundriedtomatochicken.sundriedtomatochickenPage);
app.get('/friedchicken', friedchicken.friedchickenPage);
app.get('/completed', completed.completedPage);
app.post('/completed', completed.completedAction);
app.get('/bookmarked', bookmarked.bookmarkedPage);
app.post('/bookmarked', bookmarked.bookmarkedAction);
app.post('/add', add.addItem); 
app.post('/delete', add.deleteItem); 
app.get('/completion', completion.completionPage);
app.get('/newBuddy', newBuddy.addBuddy);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
