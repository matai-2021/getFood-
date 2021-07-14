const express = require('express')

const db = require('../db/items')

const router = express.Router()

router.get('/', (req, res) => {
  db.getItems()
    .then(results => {
      res.json({ items: results.map(item => item.name) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
