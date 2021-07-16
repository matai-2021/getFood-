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
  const id = Number(req.params.id)
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
  console.log(req.body)
  const { name, dateCreated, location, isCompany, email, auth0Id } = req.body
  const newUser = { name, dateCreated, location, isCompany, email, auth0Id }
  db.addUser(newUser)
    .then((newUser) => {
      res.status(201).json(newUser)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Unable to register new user' })
    })
})

module.exports = router
