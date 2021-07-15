const connection = require('./connection')

module.exports = {
  getOrders,
  createOrder,
  updateOrderStatus
}

function getOrders (db = connection) {
  return db('orders').select()
}

function createOrder (order, db = connection) {
    const { itemId, userId, claimedById } = order
    return db('orders')
    .insert
}

function updateOrderStatus (id, db = connection) {
    return db('orders')
    .where('id', id)
    .update({
        is_dispatched: !isDispatched
    })
}