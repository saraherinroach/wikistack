
// const express = require('express');
const express = require('express')
const router =  express.Router();
const addPage = require('../views/addPage.js')

router.get('/', async (req, res, next) => {
  res.redirect('/')
  //async/await + try/catch
});

router.get('/add', async (req, res, next) => {
  try {
    await res.send(addPage());
  }
  catch(err) {
    console.error(err);
  }

  //async/await + try/catch
});

router.post('/', async (req, res, next) => {
  let query = `sql text`;
  let hold = await client.query(query);
  res.sendFile();
});


module.exports = router;
