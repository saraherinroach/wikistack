// const express = require('express');
const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage.js');
const client = require('../models');

router.get('/', async (req, res, next) => {
  res.redirect('/');
  //async/await + try/catch
});

router.get('/add', async (req, res, next) => {
  try {
    await res.send(addPage());
  } catch (err) {
    console.error(err);
  }
});

router.post('/', async (req, res, next) => {
  console.log(req.body); // req.body is undefined
  res.json(req.body);
  // let query = `sql text`;
  // let hold = await client.query(query);
  // res.sendFile();
});

module.exports = router;
