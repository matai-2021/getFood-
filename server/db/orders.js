const connection = require('./connection')

module.exports = {
  getOrders,
  createOrder,
  updateOrderStatus
}

function getOrders (db = connection) {
  return db('orders').select()
}

function createOrder (db = connection) {
    return db('orders').select()
}

function updateOrderStatus (id, db = connection) {
    return db('orders')
    .where('id', id)
    .update({
        is_dispatched: !isDispatched
    })
}