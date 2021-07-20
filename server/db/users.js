const connection = require('./connection')

module.exports = {
  addUser,
  // editProfile,
  deleteAccount,
  getAllUsers,
  userExists
}

function getAllUsers (db = connection) {
  return db('users')
    .select()
}

function userExists (auth0Id, db = connection) {
  return db('users')
    .count('id as n')
    .where('auth0Id', auth0Id)
    .then((count) => {
      return count[0].n > 0
    })
}

function addUser (newUser, db = connection) {
  const { email, auth0Id, name } = newUser
  userExists(auth0Id)
    .then((exists) => {
      if (!exists) {
        const timestamp = new Date()
        const dateCreated = timestamp.toDateString()
        return db('users')
          .insert({
            dateCreated,
            email,
            auth0Id,
            name
          })
      }
      return null
    })
    .catch((err) => {
      console.error(err.message)
    })
}

function deleteAccount (id, db = connection) {
  return db('users')
    .where('id', id)
    .delete()
}

// function editProfile (id, db = connection) {
// stretch
// }
