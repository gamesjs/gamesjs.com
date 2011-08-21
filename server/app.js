// Dependencies
var express = require('express');

// Create App/Server
var app = module.exports = express.createServer();

// ----------------
// Configurations
// ----------------
var port = 8080;
  // General
app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(app.router);
  
  
  
});
  // Development specific 
app.configure('development', function(){
  app.use(express.static(__dirname + '/../www'));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  console.log('Running in Development Mode');
});
  // Production specific
app.configure('production', function(){
  port = 80;
  var oneYear = 31557600000;
  app.use(express.static(__dirname + '/../www', { maxAge: oneYear }));
  app.use(express.errorHandler());
console.log('Running in Production Mode');
});

// Set EJS as our default Template Engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');





// Routes
  // Home Page
app.get('/', function(req,res){
  res.render('index');
});

// Start the server
app.listen(port);
console.log('Server running on port '+port);