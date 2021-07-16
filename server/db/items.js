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
  const dateCreated = Date.now() // what is the format of this date?
  const { name, location, userId, quantity, img, description, expiryDate } = newItem
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
      isClaimed: false
    })
    .then((ids) => ids[0])
}

function updateItem (updatedItem, db = connection) {
  const { id, name, location, quantity, img, description, isClaimed } = updatedItem
  return db('items')
    .where('id', id)
    .update({
      name,
      location,
      quantity,
      img,
      description,
      isClaimed: isClaimed
    })
    .then((ids) => console.log(`Item successfully created at ID # ${ids[0]}`))
}

function claimItem (item, db = connection) {
  const { id, isClaimed } = item
  return db('items')
    .where('id', id)
    .update({
      isClaimed: !isClaimed
    })
    .then((ids) => console.log(ids[0]))
}

function deleteItem (id, db = connection) {
  return db('items')
    .where('id', id)
    .delete()
}
