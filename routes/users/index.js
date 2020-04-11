const router = require('express').Router();
const path = require('path');
const users = require('../../data/users.json');
const fsPromises = require('fs').promises;

router.get('/', (req, res) => {
  fsPromises.readFile(path.join(__dirname, '../../data/users.json'), { encoding: 'utf8' })
    .then(data => {
      res.send(JSON.parse(data));
    })
    .catch(err => {
      console.log(err);
    });
});

router.get('/:id', (req, res) => {
  const user = users.find((u) => u._id == req.params.id);

  if (user) {
    res.send(user);
  }

  res.status(404).send({message: 'Нет пользователя с таким id'});
});

module.exports = router;