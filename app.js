/* eslint-disable no-path-concat */
const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(morgan('dev'));
/**/ app.use(express.static(__dirname + '/client'));

app.get('/', (req, res, next) => {
  res.send('hello world');
});

const PORT = 2211;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
