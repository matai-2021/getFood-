const express = require('express')

const db = require('../db/users')

const router = express.Router()

// GET getOrderByUserId - for profile page
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getOrdersByUserId(id)
    .then(user => {
      res.json(user)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})
