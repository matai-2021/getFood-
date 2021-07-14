const connection = require('./connection')

module.exports = {
  getUser,
  addUser,
  editProfile,
  deleteAccount
}

function getUser (db = connection) {
  return db('users').select()
}

function addUser (newUser, db = connection) {
  const dateCreated = Date.now() //what is the format of this date?
  const { name, location, isCompany, email, auth0id } = newUser
  return db('users')
  .insert({ 
    name,
    dateCreated, 
    location, 
    isCompany, 
    email, 
    auth0id 
  })
  .then((ids) => console.log(ids[0]))
}

function editProfile (db = connection) {}

function deleteAccount (db = connection) {}
