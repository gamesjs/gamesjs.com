var http = require('http')
    port = 80;
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('GamesJS. Coming Soon.\n');
}).listen(port);
console.log('Server running on port '+port);
