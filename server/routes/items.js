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

// updating item for stretch? For both Edit and Claimed?
router.patch('/', (req, res) => {
  const { id, name, location, quantity, img, description } = req.body
  const updatedItem = { id, name, location, quantity, img, description }
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

// Claiming item, so just updating isClaimed and claimedBy?
router.patch('/claim', (req, res) => {
  const { id, isClaimed, claimedById } = req.body
  console.log(req.body)
  const claimedItem = { id, isClaimed, claimedById }
  db.claimItem(claimedItem)
    .then((changedItem) => {
      res.status(201).json(changedItem)
      return null
    })
    .catch((err) => {
      res.status(500).send('failed at claiming item: ' + err.message)
    })
})

module.exports = router
