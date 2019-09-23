const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model.js')
const secrets = require('../config/secrets.js')

router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10)
  user.password = hash;
  console.log(user);

  Users.add(user)
    .then(response => {
      const token = generateToken(user)
      response.token = token
      res.status(201).json(response)
    })
    .catch(err => {
      res.status(500).json({ message: 'Unexpected error registering the user.'})
    })
})

router.post('/login', (req, res) => {
  let { username, password } = req.body

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user)
        res.status(200).json({ message: `Welcome to being logged in, ${user.username}!`, token })
      } else {
        res.status(401).json({ message: 'Invalid credentials.' })
      }
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.get('/users', (req, res) => {
  Users.find()
  .then(response => {
    res.status(200).json(response)
  })
  .catch(error => {
    res.status(500).json(error)
  })
})

//may move to another file
function generateToken(user) {
  const payload = {
    username: user.username
  }
  const options = {
    expiresIn: '5d'
  }
  return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = router;