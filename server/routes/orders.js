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
  console.log('route: ', id)
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
// router.post('/', (req, res) => {

// PATCH updateOrderStatus
// router.patch('/:id', (req, res) => {
//   const order = Number(req.params.order)
//   db.updateOrderStatus(order)
//     .then(order => {
//       res.json(order)
//       return null
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(500).json({ message: 'Somthing went wrong' })
//     })
// })

// DELETE createOrder
// router.post('/', (req, res) => {

module.exports = router
