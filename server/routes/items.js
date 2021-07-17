const express = require('express')

const db = require('../db/items')

const router = express.Router()

router.get('/item', (req, res) => {
  const id = req.body.id
  db.getItemsById(id)
    .then(item => {
      res.json(item[0].user_id)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Unable to get items' })
    })
})

// GET all items
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
    .then((id) => {
      res.status(201).json({ id })
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
      res.status(201).json('Item successfully deleted')
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Unable to delete item' })
    })
})

router.patch('/', (req, res) => {
  const { id, name, location, quantity, img, description, isClaimed } = req.body
  const updatedItem = { id, name, location, quantity, img, description, isClaimed }
  db.updateItem(updatedItem)
    .then(() => {
      res.status(201).json('Item successfully updated')
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Unable to update item' })
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

// DELETE DATA SHAPE
// req.params :id

// UPDATE DATA SHAPE
// {
//   "id": "",
//   "name": "",
//   "location": "",
//   "quantity": "",
//   "img": "",
//   "description": "",
//   "isClaimed": ""
// }
