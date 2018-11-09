/* eslint-disable no-path-concat */
const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const morgan = require('morgan');
const { db } = require('./models');
// const models = require('./models');


const layout = require('./views/layout.js')

app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(morgan('dev'));
/**/ app.use(express.static(__dirname + '/client'));

app.get('/', (req, res, next) => {
  // res.send('hello world');
  res.send(layout(''))
});

db.authenticate().
then(() => {
  console.log('connected to the database');
});


const PORT = 2211;

const init = async () => {
  await db.sync({force: true});
  // await models.db.sync({force: true})


  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}

init();




