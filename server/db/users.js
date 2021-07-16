const connection = require('./connection')

module.exports = {
  getUserById,
  addUser,
  editProfile,
  deleteAccount,
  getAllUsers
}

function getAllUsers (db = connection) {
  return db('users')
    .select()
}

function getUserById (id, db = connection) {
  return db('users')
    .select()
    .where('id', id)
}

function addUser (newUser, db = connection) {
  const dateCreated = Date.now() // what is the format of this date?
  const { name, location, isCompany, email, auth0Id } = newUser
  return db('users')
    .insert({
      name,
      dateCreated: dateCreated,
      location,
      isCompany: isCompany,
      email,
      auth0Id: auth0Id
    })
    .then((ids) => console.log(ids[0]))
}

function editProfile (id, db = connection) {
  // stretch
}

function deleteAccount (id, db = connection) {
  return db('users')
    .where('id', id)
    .delete()
}
