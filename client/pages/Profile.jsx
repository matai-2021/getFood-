import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, addUser, getUsers } from '../redux/usersSlice'

export default function Profile () {
  const dispatch = useDispatch()
  const { user: auth0userdata, isAuthenticated } = useAuth0()
  const users = useSelector(state => state.users)
  useEffect(() => {
    dispatch(getUsers())
    const newUser = {
      email: auth0userdata?.email,
      auth0Id: auth0userdata?.sub,
      name: auth0userdata?.name
    }
    if (isAuthenticated && auth0userdata) {
      dispatch(addUser(newUser))
    }
  }, [auth0userdata])

  const sessionUser = users.find(user => user.auth0Id === auth0userdata?.sub)
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
          {/* {isAuthenticated && (
            <> */}
          <h2>
            <strong>Name: </strong>{sessionUser?.name}
          </h2>
          <p>
            <strong>Email: </strong>{sessionUser?.email}
          </p>
          <p>
            <strong>Location: </strong>{sessionUser?.location}
          </p>
          <p>
            <strong>Member since: </strong>{sessionUser?.dateCreated}
          </p>
          {/* Below link is not actually a button, will need to change later */}
          <Link to={'/profilesetup'} className=''>Setup Profile</Link>
          <button onClick={() => handleDelete(sessionUser?.id)}>Delete My Account</button>
          {/* </>
          )} */}
        </div>
      </div>
    </main>
  )
}
