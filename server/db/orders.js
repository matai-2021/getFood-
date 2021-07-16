const connection = require('./connection')

module.exports = {
  getOrdersByUserId,
  createOrder,
  updateOrderStatus,
  getAllOrders
  // deleteOrderById
}

// GET all orders
function getAllOrders (db = connection) {
  return db('orders')
    .select()
}

// GET order by  ID
function getOrdersByUserId (id, db = connection) {
  console.log('DB: ', id)
  return db('orders')
    .where('id', id)
    .select()
}

// POST new order
function createOrder (order, db = connection) {
  const dateCreated = Date.now()
  const { itemId, userId, claimedById } = order
  console.log(order)
  return db('orders')
    .insert({
      dateCreated: dateCreated,
      item_id: itemId,
      user_id: userId,
      claimedBy_id: claimedById,
      isDispatched: false
    })
}

// UPDATE order status
function updateOrderStatus (order, db = connection) {
  const { id, isDispatched } = order
  return db('orders')
    .where('id', id)
    .update({
      isDispatched: !isDispatched
    })
    .then((ids) => console.log(ids[0]))
}

// DELETE order by ID
// function deleteOrderById (id, db = connection) {
//   const { id, isDispatched } = order
//   return db('orders')
//     .where('id', id)
//     .update({
//       isDispatched: !isDispatched
//     })
//     .then((ids) => console.log(ids[0]))
// }
