const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('In the middleware');
  next();
});

app.use((req, res, next) => {
  console.log('In another middleware');
  res.send('<h1>Hello from Express!</h1/>');
});

const host = 'localhost';
const port = 5000;

app.listen(port, host, () => {
  console.log(`The server is running on http://${host}:${port}`);
});
