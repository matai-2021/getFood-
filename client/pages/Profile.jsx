import React, { useEffect } from 'react'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, addUser, getUsers } from '../redux/usersSlice'

function Profile () {
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
    <div className='profile-container'>
      <div className='heading-container'>
        <h1 className='page-title'>My Profile</h1>
        <div className='horizontal-line'></div>
      </div>
      <img className="img-holder" src={auth0userdata?.picture} alt="Profile pic"/>
      <div className="profile-text-and-button-container">
        <div className="profile-text-container">
          {/* {isAuthenticated && (
            <> */}
          <h2 className='page-sub-title'>
            Name: {sessionUser?.name}
          </h2>
          <p className='page-paragraph'>
            Email: {sessionUser?.email}
          </p>
          <p className='page-paragraph'>
            Location: {sessionUser?.location}
          </p>
          <p className='page-paragraph'>
            Member since: {sessionUser?.dateCreated}
          </p>
        </div>
        <div className='profile-button-container'>
          {/* Below link is not actually a button, will need to change later */}
          <Link to={'/profilesetup'} className='btn-grad'>Edit Profile</Link>
          <button className='btn-grad' onClick={() => handleDelete(sessionUser?.id)}>Delete My Account</button>
          {/* </>
          )} */}
        </div>
      </div>
    </div>
  )
}

export default withAuthenticationRequired(Profile, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => ('Authenticating user...')
})
