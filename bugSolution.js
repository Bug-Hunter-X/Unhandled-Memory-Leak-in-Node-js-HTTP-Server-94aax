const http = require('http');

const server = http.createServer((req, res) => {
  // Process the request
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});