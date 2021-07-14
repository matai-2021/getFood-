const connection = require('./connection')

function getUsers (db = connection) {
  return db('users').select()
}

module.exports = {
  getUsers
}