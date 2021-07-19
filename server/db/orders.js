const connection = require('./connection')

module.exports = {
  getOrdersByUserId,
  createOrder,
  updateOrderStatus,
  getAllOrders,
  deleteOrderById
}

// GET all orders
function getAllOrders (db = connection) {
  return db('orders')
    .select()
}

// GET order by  ID
function getOrdersByUserId (id, db = connection) {
  return db('orders')
    .where('id', id)
    .select()
}

// POST new order
function createOrder (itemId, db = connection) {
  const dateCreated = Date.now()
  console.log(dateCreated.toDateString())
  const userId = 0 // getItemById()
  const claimedById = 0 // getCurrentUser()
  console.log('DB: ', itemId)
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
  console.log('DB: ', order)
  const { id, isDispatched } = order
  return db('orders')
    .where('id', id)
    .update({
      isDispatched: isDispatched
    })
    .then(() => console.log('Order updated'))
}

// DELETE order by ID
function deleteOrderById (id, db = connection) {
  return db('orders')
    .where('id', id)
    .delete()
}
