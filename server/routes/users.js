const express = require('express')

const db = require('../db/users')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(results => {
      res.json({ users: results.map(user => user.name) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router