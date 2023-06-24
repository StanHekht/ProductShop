const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes);

// Alternatives
// console.log(routes.someText);
// const server = http.createServer(routes.handler);

const host = 'localhost';
const port = 5000;

server.listen(port, host, () => {
  console.log(`The server is running on http://${host}:${port}`);
});
