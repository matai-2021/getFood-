const connection = require('./connection')

function getItems (db = connection) {
  return db('items').select()
}

module.exports = {
  getItems
}
