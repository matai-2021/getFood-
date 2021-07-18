import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { getUsers, deleteUser } from '../redux/usersSlice'

export default function Profile () {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users[0])
  const { user } = useAuth0() // user, isLoading
  const { name, picture, email } = user // given_name, family_name, nickname, sub

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
          <h2>
            <strong>Name: </strong>{name}
          </h2>
          <p>
            <strong>Email: </strong>{email}
          </p>
          <p>
            <strong>Location: </strong>{users?.location}
          </p>
          {/* Below link is not actually a button, will need to change later */}
          <Link to={'/profilesetup'} className=''>Setup Profile</Link>
          <button className='btn-grad' onClick={() => handleDelete(users?.id)}>Delete My Account</button>
        </div>
      </div>
    </main>
  )
}
