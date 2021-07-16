const express = require('express')

const db = require('../db/orders')

const router = express.Router()

// GET getOrderByUserId - for profile page
router.get('/', (req, res) => {
  db.getAllOrders()
    .then(order => {
      res.status(200).json(order)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Unable to get all orders' })
    })
})

// GET getOrderByUserId - for profile page
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getOrdersByUserId(id)
    .then(order => {
      res.json(order)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Unable to get order by ID' })
    })
})

// POST createOrder
router.post('/', (req, res) => {
  const { itemId } = Number(req.body.itemId)
  console.log('route: ', req.body.itemId)

  db.createOrder(itemId)
    .then((id) => {
      res.status(201).json({ id })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Unable to add item' })
    })
})

// PATCH updateOrderStatus
router.patch('/:id', (req, res) => {
  const order = {
    id: Number(req.params.id),
    isDispatched: req.body.isDispatched
  }
  console.log('route: ', order)
  db.updateOrderStatus(order)
    .then(order => {
      res.status(200).json('Order updated successfully')
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Unable to update order' })
    })
})

// DELETE createOrder
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteOrderById(id)
    .then(() => {
      res.status(201).json('Order successfully deleted')
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Unable to delete order' })
    })
})

module.exports = router
