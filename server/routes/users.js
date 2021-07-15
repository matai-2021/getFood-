const express = require('express')

const db = require('../db/users')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAllUsers()
    .then((users) => {
      res.json(users)
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// GET fetchUser - for profile page
router.get('/:id', (req, res) => {
  const id = Number(req.params)
  db.getUserById(id)
    .then(user => {
      res.json(user)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Unable to fetch user' })
    })
})

// POST registerUser
router.post('/', (req, res) => {
  console.log(req.params)
  const { newUser } = req.params
  db.addUser({ newUser })
    .then(results => {
      res.status(201).json({ results })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Unable to register new user' })
    })
})

module.exports = router
