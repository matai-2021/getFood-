const express = require('express')
const { useParams } = require('react-router-dom')

const db = require('../db/users')

const router = express.Router()

// GET fetchUser - for profile page 
router.get('/:id', (req, res) => {
    const id = useParams()
  db.getUserById()
    .then(user => {
      res.json(user)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

// POST registerUser
// router.post('/', (req, res) => {

//   db.addUser()
//     .then(results => {
//       res.json({ users: results.map(user => user.name) })
//       return null
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(500).json({ message: 'Somthing went wrong' })
//     })
// })

module.exports = router