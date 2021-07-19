import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { getUsers, deleteUser } from '../redux/usersSlice'

export default function Profile () {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  const { user } = useAuth0() // user, isLoading
  const { name, picture, email } = user

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  // whole account will be deleted db.deleteAccount is set up in server/routes/users.js
  const handleDelete = (itemId) => {
    dispatch(deleteUser({ id: itemId }))
  }

  return (
    <main className='container'>
      <h1>My Profile</h1>
      <img className="img-holder" src={picture} alt="Profile pic"/>
      <div className="parent flex-container">
        <div className="child flex-row">
          <p>
            <strong>Name: </strong>{name}
          </p>
          <p>
            <strong>Email: </strong>{email}
          </p>
          <p>
            <strong>Location: </strong>{users?.location}
          </p>
<<<<<<< HEAD
          <Link className="button" to={'/profilesetup'}>Setup Profile</Link>
          <button className='button-purple' onClick={() => handleDelete(users?.id)}>Delete My Account</button>
=======
          {/* Below link is not actually a button, will need to change later */}
          <Link to={'/profilesetup'} className=''>Setup Profile</Link>
          <button className='btn-grad' onClick={() => handleDelete(users?.id)}>Delete My Account</button>
>>>>>>> bde33f7c1e0fef39f1b5d6b35f2462fb09be77ed
        </div>
      </div>
    </main>
  )
}
