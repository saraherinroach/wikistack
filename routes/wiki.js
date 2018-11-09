// const express = require('express');
const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage.js');
const client = require('../models');
const { Page } = require("../models");

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
  const page = new Page({
    title: req.body.title,
    content: "HEllO"
  });

  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.

  try {
    await page.save();
    res.redirect('/');
  }
  catch (error) {next(error)}


  // console.log(req.body); // req.body is undefined
  // res.json(req.body);
  // let query = `sql text`;
  // let hold = await client.query(query);
  // res.sendFile();
});

module.exports = router;
