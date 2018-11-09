const router = require('/.express').Router();

router.get('/', async (req, res, next) => {
  await res.sendFile();
  //async/await + try/catch
});

router.get('/add', async (req, res, next) => {
  await res.sendFile();
  //async/await + try/catch
});

router.post('/', async (req, res, next) => {
  let query = `sql text`;
  let hold = await client.query(query);
  res.sendFile();
});
