const connection = require('./connection')

module.exports = {
  getUserById,
  addUser,
  editProfile,
  deleteAccount,
  userExists
}

function getUserById (id, db = connection) {
  return db('users')
  .select()
  .where('id', id)
}

function addUser (newUser, db = connection) {
  const dateCreated = Date.now() //what is the format of this date?
  const { name, username, location, isCompany, email, auth0id } = newUser
  return userExists(username)
  .then((exists) => {
    if (exists) {
      throw new Error('User exists')
    }
    return false
  })
  .then(() => {
    return db('users')
    .insert({ 
      name,
      username,
      date_created: dateCreated, 
      location, 
      is_company: isCompany, 
      email, 
      auth0_id: auth0id 
    })
    .then((ids) => console.log(ids[0]))
  })
}

function editProfile (id, db = connection) {
  // stretch
}

function deleteAccount (id, db = connection) {
  return db('users')
  .where('id', id)
  .delete()
}


function userExists (username, db = connection) {
  return db('users')
    .count('id as n')
    .where('username', username)
    .then((count) => {
      return count[0].n > 0
    })
}
