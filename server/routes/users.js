const express = require('express')

const db = require('../db/users')

const router = express.Router()

// GET fetch all users
router.get('/', (req, res) => {
  db.getAllUsers()
    .then((users) => {
      res.json(users)
      return null
    })
    .catch(() => {
      res.status(500).json({
        error: {
          title: 'Unable to get users'
        }
      })
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
    .catch(() => {
      res.status(500).json({
        error: {
          title: 'Unable to get user by id'
        }
      })
    })
})

// POST registerUser
router.post('/', (req, res) => {
  const { name, dateCreated, location, isCompany, email, auth0Id, companyName, phone } = req.body
  const newUser = { name, dateCreated, location, isCompany, email, auth0Id, companyName, phone }
  db.addUser(newUser)
    .then((newUser) => {
      res.status(201).json({ newUser })
      return null
    })
    .catch(() => {
      res.status(500).json({
        error: {
          title: 'Unable to add user'
        }
      })
    })
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteAccount(id)
    .then(() => {
      res.status(200).json('Account successfully deleted')
      return null
    })
    .catch(() => {
      res.status(500).json({
        error: {
          title: 'Unable to delete account'
        }
      })
    })
})

module.exports = router
