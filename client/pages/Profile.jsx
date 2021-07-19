import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { getUsers, deleteUser, addUser } from '../redux/usersSlice'

export default function Profile () {
  const dispatch = useDispatch()
  const usersFromDB = useSelector(state => state.users)
  const { user: auth0userdata } = useAuth0()
  // console.log('userExists', userExists)
  console.log('from DB: ', usersFromDB)
  console.log('from auth0: ', auth0userdata)
  console.log('auth0userdata.email', auth0userdata?.sub)
  // console.log('getUserById(1)', dispatch(getUserById(1)))

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  const userExists = usersFromDB.find(u => u.auth0Id === auth0userdata?.sub)
  if (userExists === undefined) {
    console.log('User does not exist!!!')
    const newUser = {
      email: auth0userdata?.email,
      auth0Id: auth0userdata?.sub
    }
    dispatch(addUser(newUser))
    console.log('Created new user')
  }
  console.log('working')

  // whole account will be deleted db.deleteAccount is set up in server/routes/users.js
  const handleDelete = (itemId) => {
    dispatch(deleteUser({ id: itemId }))
  }

  return (
    <main className='container'>
      <h1>My Profile</h1>
      <img className="img-holder" src={auth0userdata?.picture} alt="Profile pic"/>
      <div className="parent flex-container">
        <div className="child flex-row">
          <h2>
            <strong>Name: </strong>{userExists?.name}
          </h2>
          <p>
            <strong>Email: </strong>{userExists?.email}
          </p>
          <p>
            <strong>Location: </strong>{userExists?.location}
          </p>
          <p>
            <strong>auth0Id: </strong>{userExists?.auth0Id}
          </p>
          <p>
            <strong>Member since: </strong>{userExists?.dateCreated}
          </p>
          {/* Below link is not actually a button, will need to change later */}
          <Link to={'/profilesetup'} className=''>Setup Profile</Link>
          <button onClick={() => handleDelete(userExists?.id)}>Delete My Account</button>
        </div>
      </div>
    </main>
  )
}
