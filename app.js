const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes);

// Alternatives
// console.log(routes.someText);
// const server = http.createServer(routes.handler);

server.listen(5000);
