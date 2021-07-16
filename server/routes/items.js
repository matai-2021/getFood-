const express = require('express')

const db = require('../db/items')

const router = express.Router()

router.get('/', (req, res) => {
  db.getItems()
    .then(results => {
      res.json({ items: results.map(item => item) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Unable to get items' })
    })
})

router.post('/add', (req, res) => {
  const { name, location, userId, quantity, img, description, expiryDate } = req.body
  const item = { name, location, userId, quantity, img, description, expiryDate }
  db.addItem(item)
    .then(() => {
      res.status(201).json('Item successfully added')
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Unable to add item' })
    })
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteItem(id)
    .then(() => {
      res.status(201).json(`Item successfully deleted`)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Unable to delete item' })
    })
})

router.patch('/', (req, res) => {
  const updatedItem = req.params.updatedItem
  db.updateItem(updatedItem)
    .then(() => {
      res.status(201).json('Item successfully deleted')
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Unable to delete item' })
    })
})

module.exports = router

// POST DATA SHAPE
// {
//   "name": "Chocolate Bar",
//   "expiryDate": "3/08 13:00",
//   "location": "Waterview, Auckland",
//   "quantity": 6,
//   "description": "good shape",
//   "img": "img"
// }
