const connection = require('./connection')

module.exports = {
  getItems,
  addItem,
  updateItem,
  deleteItem,
  claimItem,
  getItemsById
}

function getItemsById (id, db = connection) {
  console.log('id', id)
  return db('items')
    .where('id', id)
    .select()
}

function getItems (db = connection) {
  return db('items').select()
}

function addItem (newItem, db = connection) {
  const timestamp = new Date()
  const dateCreated = timestamp.toDateString()
  const { name, location, userId, quantity, img, description, expiryDate, email } = newItem
  return db('items')
    .insert({
      name,
      location,
      user_id: userId,
      quantity,
      img,
      description,
      dateCreated: dateCreated,
      expiryDate: expiryDate,
      email,
      isClaimed: false
    })
    .then((ids) => ids[0])
}

function updateItem (updatedItem, db = connection) {
  const { id, name, location, quantity, img, description } = updatedItem
  return db('items')
    .where('id', id)
    .update({
      name,
      location,
      quantity,
      img,
      description
    })
    .then((ids) => console.log(`Item successfully created at ID # ${ids[0]}`))
}

function claimItem (claimedItem, db = connection) {
  const { id, isClaimed, claimedById } = claimedItem
  return db('items')
    .where('id', id)
    .update({
      isClaimed,
      claimedById
    })
}

function deleteItem (id, db = connection) {
  return db('items')
    .where('id', id)
    .delete()
}
