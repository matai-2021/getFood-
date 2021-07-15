const connection = require('./connection')

module.exports = {
  getItems,
  addItem,
  updateItem,
  deleteItem,
  claimItem
}

function getItems (db = connection) {
  return db('items').select()
}

function addItem (newItem, db = connection) {
  const dateCreated = Date.now() //what is the format of this date?
  const { name, location, userId, quantity, img, description, expiryDate, isClaimed } = newItem
    return db('items')
    .insert({ 
      name, 
      location, 
      user_id: userId, 
      quantity, 
      img, 
      description, 
      date_created: dateCreated,
      expiry_date: expiryDate, 
      is_claimed: isClaimed
    })
    .then((ids) => console.log(ids[0]))
}

function updateItem (updatedItem, db = connection) {
  const { name, location, quantity, img, description, isClaimed } = updatedItem
  return db('items')
  .where('id', id)
  .update({
    name, 
    location, 
    quantity, 
    img, 
    description, 
    is_claimed: isClaimed
  })
  .then((ids) => console.log(ids[0]))
}

function claimItem (item, db = connection) {
  const { id, isClaimed } = item
  return db('items')
  .where('id', id)
  .update({ 
    is_claimed: !isClaimed
  })
  .then((ids) => console.log(ids[0]))
}

function deleteItem (id, db = connection) {
  return db('items')
  .where('id', id)
  .delete()
}
