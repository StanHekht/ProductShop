const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
  console.log('This always runs');
  next();
});

app.use('/add-product', (req, res, next) => {
  console.log('In another middleware');
  res.send('<h1>Add product page</h1/>');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1/>');
});

const host = 'localhost';
const port = 5000;

app.listen(port, host, () => {
  console.log(`The server is running on http://${host}:${port}`);
});
