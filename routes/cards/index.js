const router = require('express').Router();
const path = require('path');
const fsPromises = require('fs').promises;

router.get('/', (req, res) => {
  fsPromises.readFile(path.join(__dirname, '../../data/cards.json'), { encoding: 'utf8' })
    .then(data => {
      res.send(JSON.parse(data));
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
