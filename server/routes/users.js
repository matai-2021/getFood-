const express = require('express')

const db = require('../db/users')

const router = express.Router()

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
      res.status(500).json({ message: 'Unable ' })
    })
})

// POST registerUser
router.post('/', (req, res) => {
  const { newUser } = req.params.newUser
  db.addUser(newUser)
    .then(results => {
      res.status(201).json({ results })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Unable to add new register' })
    })
})

module.exports = router
