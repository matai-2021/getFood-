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
    const dateCreated = Date.now()
    const { itemId, userId, claimedById } = order
    return db('orders')
    .insert({
        date_created: dateCreated,
        item_id: itemId, 
        user_id: userId, 
        claimed_by_id: claimedById,
        is_dispatched: isDispatched
    })
}

function updateOrderStatus (order, db = connection) {
    const { id, isDispatched } = order
    return db('orders')
    .where('id', id)
    .update({ 
      is_dispatched: !isDispatched
    })
    .then((ids) => console.log(ids[0]))
  }