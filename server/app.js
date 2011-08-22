// Dependencies
var express = require('express'),
    stylus = require('stylus');

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
  
  // Setup Stylus (Will Compile files on change
  function compile(str, path, fn) {
    stylus(str)
      .set('filename', path)
      .set('compress', true)
      .render(fn);
  }
  app.use(stylus.middleware({ src: __dirname + '/../www' }));
  
  app.use(app.router);
  
});
  // Development specific 
app.configure('development', function(){
  app.use(express.static(__dirname + '/../www'));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  console.log('Running in Development Mode');
});
  // Production specific (You don't have to worry about setting this. 
  // It is set by default on the live server.
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
  // All the subpages
var pages = ["contribute", "demos", "docs", "home"];
for(var i = 0; i<pages.length;i++){
  (function(){
    var j = i;
    app.get('/pages/'+pages[j], function(req,res){
      res.render('pages/'+pages[j],{layout:false});
    });
    app.get('/'+pages[j],function(req,res){
      res.render('index');
    });
  })();
}
  // 404 Page

app.get('/pages/page-not-found-404', function(req,res){
  res.render('pages/page-not-found-404',{layout:false});
});
app.get('/404',function(req,res){
  res.render('index');
});




// Start the server
app.listen(port);
console.log('Server running on port '+port);