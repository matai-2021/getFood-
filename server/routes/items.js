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

// adding new item
router.post('/add', (req, res) => {
  const { name, location, userId, quantity, img, description, expiryDate, email } = req.body
  const item = { name, location, userId, quantity, img, description, expiryDate, email }
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

// updating item. For both Edit and Claimed?
router.patch('/', (req, res) => {
  const { id, name, location, quantity, img, description, isClaimed, claimedById } = req.body
  const updatedItem = { id, name, location, quantity, img, description, isClaimed, claimedById }
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

// sweet as organics release 3, for Patching to /api/v1/orders
// router.patch('/', (req, res) => {
//   db.editOrderStatus(req.body.id, req.body.newStatus)
//     .then((changedOrder) => {
//       res.status(201).json(changedOrder)
//       return null
//     })
//     .catch((err) => {
//       res.status(500).send('failed to change order status: ' + err.message)
//     })
// })

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
//   "id": 0,
//   "name": "",
//   "location": "",
//   "quantity": "",
//   "img": "",
//   "description": "",
//   "isClaimed": "",
//   "claimedById": 0,
// }
