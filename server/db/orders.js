const connection = require('./connection')

module.exports = {
  getOrdersByUserId,
  createOrder,
  updateOrderStatus
}

function getOrdersByUserId (id, db = connection) {
  console.log(id)
  return db('orders')
    .where('id', id)
    .select()
}

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

function updateOrderStatus (order, db = connection) {
  const { id, isDispatched } = order
  return db('orders')
    .where('id', id)
    .update({
      isDispatched: !isDispatched
    })
    .then((ids) => console.log(ids[0]))
}
